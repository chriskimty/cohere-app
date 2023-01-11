const Instructions = ({handleClick}) => {
    return (
        <div className="instructions">
            <p>There's a name every pet deserves.
                <span>Use the PNG to give them their name for life!</span>
            </p>
            <button onClick={handleClick} className="button">Generate!</button>
        </div>
    )
}

export default Instructions;