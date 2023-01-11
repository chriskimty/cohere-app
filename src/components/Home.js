import logo from '../assets/petNameGenHorizontal.png';
import Forms from './Forms';
import Footer from './Footer';

const Home = () => {
    return (
        <div className="home wrapper">
            <h1>
                <span className="sr-only">Pet Name Generator</span>
                <div className="icon">
                    <img src={logo} alt="PNG (pet name generator) logo" />
                </div>
            </h1>
            <p>There's a name every kittycat, puppypup, birdybird or other fur/non-fur bbs deserves.
                <span>Use the PNG to give them their name for life!</span>
            </p>
            <Forms />
            <Footer />
        </div>
    )
}

export default Home;