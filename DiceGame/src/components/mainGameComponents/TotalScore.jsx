import { useEffect } from "react";

export default function TotalScore({score, setScore, rollDice, prevDiceSelected}) {
    const lossBy = 1;
    // eslint-disable-next-line
    useEffect(()=>{
        if(prevDiceSelected){
            (rollDice === prevDiceSelected)? setScore((prev)=>prev+ rollDice):
            setScore((prev)=> prev - lossBy)
        }
    },[rollDice,prevDiceSelected])

    // Locally Storing the Score
    useEffect(()=>{
        localStorage && localStorage.setItem("score", score);
    },[score])
    return (
        <>
            <div className="totalScoreContainer">
            <h1>Total Score <br/>{score} </h1>
           </div>
        </>

    )
}
