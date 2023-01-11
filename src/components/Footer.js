import petline from '../assets/petLine.png';

const Footer = () => {
    return (
        // add copyrights. maybe add it as background images rather than as an image and make it repeat? 
        <div className="footer">
            <img src={petline} alt="line of pets drawn as cartoon" />
            <div className="copyright">
                Created by Chris Taeyoung Kim
            </div>
            {/* link to github repo */}
        </div>
    )
}

export default Footer;