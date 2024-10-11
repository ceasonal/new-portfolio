import './Skills.css';

const Skills = () => {
    return (
        <>
            <div className="skills-container" style={{marginTop:50}}>
                <h1 className="cyber-h cyber-glitch-4" style={{ textAlign: 'center', color: '#ECE9E2' }}>
                    Skills
                </h1>
                <div className="skills-grid cyber-glitch-1">
                    <div className='cyber-tile-small'>
                        <img src='https://static.cdnlogo.com/logos/c/21/cisco-systems.png' alt='icon' style={{ width: '100px' }} />
                    </div>
                    <div className='cyber-tile-small'>
                        <img src='https://www.checkpoint.com/wp-content/uploads/check-point-logo-large-2024.png' alt='icon' style={{ width: '100px' }} />
                    </div>
                    <div className='cyber-tile-small'>
                        <img src='https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo/Parent-logo.png?imwidth=480' alt='icon' style={{ width: '100px' }} />
                    </div>
                    <div className='cyber-tile-small'>
                        <img src='https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png' alt='icon' style={{ width: '100px' }} />
                    </div>
                    <div className='cyber-tile-small'>
                        <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--8BebtJyN--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://clipart.info/images/ccovers/1499794874html5-js-css3-logo-png.png' alt='icon' style={{ width: '100px' }} />
                    </div>
                    <div className='cyber-tile-small'>
                        <img src='https://bendyworks.com/assets/images/blog/2020-05-21-setup-windows-development-eb5c79a7.png' alt='icon' style={{ width: '100px' }} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;
