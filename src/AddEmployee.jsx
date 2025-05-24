import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from './hooks/useAxios';
import './styles/AddEmployee.css';

const AddEmployee = ({ onAddEmployee }) => {
    const { post } = useAxios();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        title: '',
        salary: '',
        phone: '',
        email: '',
        animal: '',
        startDate: '',
        location: '',
        department: '',
        skills: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const skillsArray = formData.skills.split(',').map((skill) => skill.trim());
        const newEmployee = {
            ...formData,
            skills: skillsArray,
            salary: parseFloat(formData.salary),
            startDate: formData.startDate,
            id: Date.now(),
        };

        try {
            await post('/employees', newEmployee);
            onAddEmployee(newEmployee);
            setFormData({
                name: '', title: '', salary: '', phone: '', email: '', animal: '',
                startDate: '', location: '', department: '', skills: ''
            });
            navigate('/');
        } catch (error) {
            console.error('Error adding employee:', error);
            alert('There was an error adding the employee.');
        }
    };

    return (
        <div className="form-wrapper">
            <h2 className="form-title">Add New Employee</h2>
            <form className="employee-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="salary">Salary:</label>
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="animal">Animal:</label>
                    <input
                        type="text"
                        id="animal"
                        name="animal"
                        value={formData.animal}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="department">Department:</label>
                    <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="skills">Skills (comma separated):</label>
                    <input
                        type="text"
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="submit-btn">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;
