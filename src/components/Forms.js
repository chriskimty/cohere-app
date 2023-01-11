import useCoGen from './useCoGen';

const Forms = () => {
    const { data: type, personality, setType, setPersonality, handleFunction, call, isPending, error } = useCoGen();
    
    return (
        <div className="forms">
            <form action="submit" onSubmit={handleFunction}>
          <label htmlFor="text">Type of pet:</label>
          <input type="text" value={type}
          onChange={(e) => setType(e.target.value)} required />
          
          <label htmlFor="text">Personality:</label>
            <input type="text" value={personality}
            onChange={(e) => setPersonality(e.target.value)} required/>
          <button>Generate Pet Name</button>
        </form>
            <div className="results">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {call && <h3>{call}</h3>}
            </div>
        </div>
    )
}

export default Forms;