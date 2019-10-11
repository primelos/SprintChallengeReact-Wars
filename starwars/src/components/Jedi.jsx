import React, {useState, useEffect} from 'react';
import axios from 'axios'
import JediCard from './JediCard'

const Jedi = () => {
    const who = `https://swapi.co/api/people/`

    const [newChar, setNewChar] = useState([]);

    useEffect(()=> {
        axios.get(who)
            .then(response => {
                console.log(`1`,response.data.results)
                setNewChar(response.data.results)
            })
            .catch(error => {
                console.log(`my bad`, error)
            })
    },[])

return (
    <div className='main'>

        {newChar.map((xWing, id) => {
            return <JediCard key={id} birth={xWing.birth_year} eye={xWing.eye_color} gender={xWing.gender} hair={xWing.hair_color} tall={xWing.height} weight={xWing.mass} name={xWing.name}  />

        })}

    </div>
)
}
export default Jedi;