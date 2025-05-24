import { useState } from 'react';
import './styles/App.css';
import useAxios from './hooks/useAxios';

const animalEmoji = (animal) => {
    const map = {
        Owl: '🦉', Eagel: '🦅', Dove: '🕊️', Parrot: '🦜', Phoenix: '🐦‍🔥',
        Dog: '🐕', Cat: '🐈', Rabbit: '🐇', Turtle: '🐢', Panda: '🐼',
        Kangaroo: '🦘', Fox: '🦊', Bear: '🐻', Elephant: '🐘',
        Hedgehog: '🦔', Penguin: '🐧', Wolf: '🐺', Horse: '🐎',
        Shark: '🦈', Whale: '🐋', Dolphin: '🐬', Octopus: '🐙', Unicorn: '🦄'
    };
    return map[animal] || '🐾';
};

const yearCalculator = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    const anniversary =
        now.getMonth() > start.getMonth() ||
        (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());
    if (!anniversary) years -= 1;
    return years;
};

const PersonCard = ({ employee, onUpdate }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const [formData, setFormData] = useState({
        salary: employee.salary,
        location: employee.location,
        department: employee.department,
        skills: employee.skills.join(', ')
    });

    const { patch } = useAxios();

    const yearsWorked = yearCalculator(employee.startDate);
    const dateDifference = new Date(employee.startDate) - new Date();
    const monthDifference = dateDifference / (1000 * 60 * 60 * 24 * 30.44);

    let message = null;
    if (yearsWorked > 0 && yearsWorked % 5 === 0) {
        message = <p>🎉 Schedule recognition meeting.</p>;
    } else if (monthDifference < 6) {
        message = <p>🔔 Schedule probation review.</p>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const showTemporaryMessage = (msg) => {
        setStatusMessage(msg);
        setTimeout(() => setStatusMessage(''), 3000);
    };

    const handleSave = async () => {
        const updated = {
            salary: Number(formData.salary),
            location: formData.location,
            department: formData.department,
            skills: formData.skills.split(',').map(s => s.trim())
        };

        try {
            const res = await patch(`/employees/${employee.id}`, updated);
            onUpdate(res);
            setIsEditing(false);
            showTemporaryMessage('✅ Changes saved!');
        } catch (err) {
            console.error('Failed to update employee', err);
        }
    };

    const handleCancel = () => {
        setFormData({
            salary: employee.salary,
            location: employee.location,
            department: employee.department,
            skills: employee.skills.join(', ')
        });
        setIsEditing(false);
        showTemporaryMessage('❌ Cancelled by user');
    };

    return (
        <div className="card">
            <h2 className="name">
                {employee.name} {animalEmoji(employee.animal)}
            </h2>
            <div className="card-para">
                <p><strong>Title:</strong> {employee.title}</p>
                <p><strong>Department:</strong> {employee.department}</p>
                <p><strong>Years Worked:</strong> {yearsWorked}</p>
                {message}

                <div style={{ marginBottom: '10px' }}>
                    <button onClick={() => setShowDetails(prev => !prev)} className="details-btn">
                        {showDetails ? 'Hide Details' : 'Show Details'}
                    </button>

                    <button
                        onClick={() => showDetails && setIsEditing(true)}
                        className="edit-btn"
                        disabled={!showDetails}
                        style={{
                            marginLeft: '10px',
                            opacity: showDetails ? 1 : 0.5,
                            cursor: showDetails ? 'pointer' : 'not-allowed'
                        }}
                    >
                        ✏️ Edit
                    </button>
                </div>

                {showDetails && (
                    <>
                        {!isEditing ? (
                            <>
                                <p><strong>Location:</strong> {employee.location}</p>
                                <p><strong>Email:</strong> {employee.email}</p>
                                <p><strong>Phone:</strong> {employee.phone}</p>
                                <p><strong>Salary:</strong> €{employee.salary}</p>
                                <p><strong>Skills:</strong> {employee.skills.join(', ')}</p>
                            </>
                        ) : (
                            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label>Salary:</label>
                                <input
                                    name="salary"
                                    type="number"
                                    value={formData.salary}
                                    onChange={handleChange}
                                />

                                <label>Location:</label>
                                <input
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                />

                                <label>Department:</label>
                                <input
                                    name="department"
                                    value={formData.department}
                                    onChange={handleChange}
                                />

                                <label>Skills (comma-separated):</label>
                                <input
                                    name="skills"
                                    value={formData.skills}
                                    onChange={handleChange}
                                />

                                <div style={{ marginTop: '10px' }}>
                                    <button onClick={handleSave} className="save-btn">✅ Save</button>
                                    <button onClick={handleCancel} className="cancel-btn">❌ Cancel</button>
                                </div>
                            </div>
                        )}
                        {statusMessage && (
                            <p style={{ color: statusMessage.includes('✅') ? 'green' : 'red', marginTop: '10px', fontWeight: 'bold' }}>
                                {statusMessage}
                            </p>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default PersonCard;

