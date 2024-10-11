import xeni from '../images/xeni.jpg';
// import rosa from '../images/rosa.png';
import asteroid from '../images/asteroid.png';
import ceasonport from '../images/ceasonport.png';
import cordle from '../images/cordle.png';
import tquest from '../images/tquest.png';
import './Project.css';

const Project = () => {
    return (
        <div className="project-container">
            <h1 className='cyber-h cyber-glitch-2' style={{ color: '#ECE9E2', textAlign: 'center' }}>Projects</h1>
            <div className='project-grid cyber-glitch-1'>
                <div className='project-tile cyber-tile-small'>
                    <img src={xeni} alt="Xeni Bot" />
                    <h5 className='cyber-h' style={{ color: '#151412' }}>Xeni Bot</h5>
                    <label style={{ color: '#151412' }}>A discord bot that serves a variety of purposes..</label>
                </div>
                
                <div className='project-tile cyber-tile-small'>
                    {/* <img src={rosa} alt="Rosa Evo" /> */}
                    <h5 className='cyber-h' style={{ color: '#151412' }}>Rosa Evo</h5>
                    <label style={{ color: '#151412' }}>An Ecommerce Website for selling 'Resin based' Jewelry.</label>
                </div>

                <div className='project-tile cyber-tile-small'>
                    <img src={ceasonport} alt="Portfolio" />
                    <h5 className='cyber-h' style={{ color: '#151412' }}>Portfolio</h5>
                    <label style={{ color: '#151412' }}>My very first try at a Portfolio using Pico.css.</label>
                </div>
                
                <div className='project-tile cyber-tile-small'>
                    <img src={asteroid} alt="Asteroid Defence" />
                    <h5 className='cyber-h' style={{ color: '#151412' }}>Asteroid Defence</h5>
                    <label style={{ color: '#151412' }}>A beginner level arcade game made using PyGame.</label>
                </div>

                <div className='project-tile cyber-tile-small'>
                    <img src={cordle} alt="Cordle" />
                    <h5 className='cyber-h' style={{ color: '#151412' }}>Cordle</h5>
                    <label style={{ color: '#151412' }}>A game of Wordle but with coding words (Made with a friend).</label>
                </div>

                <div className='project-tile cyber-tile-small'>
                    <img src={tquest} alt="Treasure Quest Web" />
                    <h5 className='cyber-h' style={{ color: '#151412' }}>Treasure Quest Web</h5>
                    <label style={{ color: '#151412' }}>A website made for a friend to download his game and play it online.</label>
                </div>
            </div>
        </div>
    );
}

export default Project;
