import React, { useEffect, useState } from "react";
import axios from "axios";

const ChallengesList = () => {
  const [challenges, setChallenges] = useState([]);
 const [show, setshow]=useState(false);
  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get(
          "https://xrsports.games/public/get-previous-challenges/xrsports/1"
        );
        setChallenges(response.data.data.data);
      } catch (error) {
        console.error("Failed to fetch challenges:", error.message);
      }
    };

    fetchChallenges();
  }, []);
  const showlist=()=>{
   setshow(!show);
  }
  return (
    <div>
    <button onClick={()=>showlist()}>Show Challenges List</button>
    {show && <>
      <h2>Challenges Listing</h2>
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge.id}>
            <h3>Name:- {challenge.challenge_name}</h3>
            <p>Description:- {challenge.challenge_description}</p>
          </li>
        ))}
      </ul>
      </>}
    </div>
  );
};

export default ChallengesList;
