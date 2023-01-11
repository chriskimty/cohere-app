import { useState } from 'react';
import logo from '../assets/petNameGenHorizontal.png';
import Instructions from './Instructions';
import Forms from './Forms';
import Footer from './Footer';

const Home = () => {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setIsClicked(true);
    }
    return (
        <div className="home">
            <h1>
                <span className="sr-only">Pet Name Generator</span>
                <div className="icon">
                    <img src={logo} alt="PNG (pet name generator) logo" />
                </div>
            </h1>
            
            {!isClicked
                ? <Instructions handleClick={handleClick} />
                : < Forms />}
            <Footer />
        </div>
    )
}

export default Home;