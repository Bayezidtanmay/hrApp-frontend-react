import { useState, useEffect } from 'react';
import axios from 'axios';
import PersonCard from './PersonCard';

const PersonList = () => {
    const [employees, setEmployees] = useState([]);

    // Fetch employees from the backend
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:3001/employees');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();
    }, []);

    // Add new employee to list (used from AddEmployee form)
    const handleAddEmployee = (newEmployee) => {
        setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    };

    // Update employee in local state (after editing)
    const handleUpdateEmployee = (updatedEmployee) => {
        setEmployees((prevEmployees) =>
            prevEmployees.map((emp) =>
                emp.id === updatedEmployee.id ? updatedEmployee : emp
            )
        );
    };

    return (
        <div className="container">
            {employees.map((employee) => (
                <PersonCard
                    key={employee.id}
                    employee={employee}
                    onUpdate={handleUpdateEmployee}
                />
            ))}
        </div>
    );
};

export default PersonList;

