import catConstruction from '../assets/catConstruction.png'

const Spotlight = () => {
    return (
        <div className="spotlight">
            <h2>PNG Spotlight✨!</h2>
            <p>This page is under construction! Please drop by again soon🙏</p>
            <div className="image">
                <img src={catConstruction} alt="a tabby cat drilling with a construction helmet and safety boots on" />
            </div>
        </div>
    )
}

export default Spotlight;