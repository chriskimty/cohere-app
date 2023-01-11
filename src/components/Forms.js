import useCoGen from './useCoGen';
import loading from '../assets/catLoading.gif'

const Forms = () => {
    const { data: type, personality, setType, setPersonality, handleFunction, call, isPending, error } = useCoGen();
    
    return (
        <div className="forms">
            <form action="submit" onSubmit={handleFunction}>
                <label htmlFor="text">What type of pet do you have?</label>
                <input type="text" value={type}
                onChange={(e) => setType(e.target.value)} placeholder="cat" required />
                <label htmlFor="text">What's your pet's personality?</label>
                    <input type="text" value={personality}
                    onChange={(e) => setPersonality(e.target.value)} placeholder="hilarious" required/>
                <button className="button">Generate Pet Name</button>
            </form>
            <div className="results">
                {isPending && <div className="loading">
                    <img src={loading} alt="loading cat gif" />
                </div>}
                {error && <div className="error">{error}</div>}
                {call && <h3>🖤 {call}🖤</h3>}
            </div>
        </div>
    )
}

export default Forms;