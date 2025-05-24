import './styles/About.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-content">
                <h2>Welcome to HR App 👩‍💼👨‍💼</h2>
                <p>
                    HR App is your all-in-one solution for managing employee data with ease.
                    You can view, add, and maintain employee records in a seamless and intuitive way.
                </p>
                <p>
                    Built with <strong>React</strong>, this app demonstrates real-time updates, routing,
                    dynamic forms, and smart business logic like anniversary and probation reminders.
                </p>
                <p>
                    Whether you're a growing startup or a well-established company, HR App helps
                    streamline your HR workflow with simplicity and efficiency.
                </p>
                <div className="tech-stack">
                    <h3>🚀 Tech Stack</h3>
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Vite</li>
                        <li>JavaScript (ES6+)</li>
                        <li>CSS Modules</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;

