import './Project.css';

const Project = () => {
    return (
        <div className="project-container">
            <h1 className='cyber-h cyber-glitch-2' style={{ color: '#ECE9E2', textAlign: 'center' }}>Projects</h1>
            <div className='project-grid cyber-glitch-1'>
                <div className='project-tile cyber-tile-small'>
                    <img src="../src/assets/images/xeni.jpg" alt="Xeni Bot" />
                    <h5 className='cyber-h' style={{ color: '#151412' }}>Xeni Bot</h5>
                    <label style={{ color: '#151412' }}>A discord bot that serves a variety of purposes.</label>
                </div>
                
                <div className='project-tile cyber-tile-small'>
                    <img src="../src/assets/images/rosa.png" alt="Rosa Evo" />
                    <h5 className='cyber-h' style={{ color: '#151412' }}>Rosa Evo</h5>
                    <label style={{ color: '#151412' }}>An Ecommerce Website for selling 'Resin based' Jewelry.</label>
                </div>

                <div className='project-tile cyber-tile-small'>
                    <img src="../src/assets/images/ceasonport.png" alt="Portfolio" />
                    <h5 className='cyber-h' style={{ color: '#151412' }}>Portfolio</h5>
                    <label style={{ color: '#151412' }}>My very first try at a Portfolio using Pico.css.</label>
                </div>
                
                <div className='project-tile cyber-tile-small'>
                    <img src="../src/assets/images/asteroid.png" alt="Asteroid Defence" />
                    <h5 className='cyber-h' style={{ color: '#151412' }}>Asteroid Defence</h5>
                    <label style={{ color: '#151412' }}>A beginner level arcade game made using PyGame.</label>
                </div>

                <div className='project-tile cyber-tile-small'>
                    <img src="../src/assets/images/cordle.png" alt="Cordle" />
                    <h5 className='cyber-h' style={{ color: '#151412' }}>Cordle</h5>
                    <label style={{ color: '#151412' }}>A game of Wordle but with coding words (Made with a friend).</label>
                </div>

                <div className='project-tile cyber-tile-small'>
                    <img src="../src/assets/images/tquest.png" alt="Treasure Quest Web" />
                    <h5 className='cyber-h' style={{ color: '#151412' }}>Treasure Quest Web</h5>
                    <label style={{ color: '#151412' }}>A website made for a friend to download his game and play it online.</label>
                </div>
            </div>
        </div>
    );
}

export default Project;
