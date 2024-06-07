import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Meow = ({ count }) => {
    const [fact, setFact] = useState([])

  useEffect(()=>{
    const catFacts = async() => {
        try {
            const res= await axios.get(`https://meowfacts.herokuapp.com/?count=${count}`);
            console.log(res.data);
            setFact(res.data.data); 
            
        } catch (error) {
            console.error("MEOW ERROR :" , error);
            
        }
    };

    catFacts();
  },[count])
  
  

  return (
    <div>
    {fact.length > 0 ? (
      
        <p>{fact}</p>
      
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}

export default Meow;