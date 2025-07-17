import {useState } from "react";
import NumberSelector from "../mainGameComponents/NumberSelector";
import RollDice from "../mainGameComponents/RollDice";
import TotalScore from "../mainGameComponents/TotalScore";
import ErrorPage from "./ErrorPages";
import "../mainGameComponents/CSS/mainGameComponents.css"

export default function MainGamePage({setShowHelpPage}) {
    const localScoreVal= localStorage && localStorage.getItem("score")? localStorage.getItem("score"): 0;
    const [diceSelected, setDiceSelected]= useState(null);
    const [errMessage, setErrMessage]= useState("");
    const [rollDice, setRollDice]= useState(1);
    const [prevDiceSelected, setPrevDiceSelected]= useState(0);
    const [score, setScore] = useState(localScoreVal);
    const totalDice = [1,2,3,4,5,6];
    return (
        <>
        {/* this extra div created as to show parallel
        score and selector class in browser.
         */}
        <div className="score-Selector-Container">
        <TotalScore rollDice={rollDice} prevDiceSelected={prevDiceSelected}
        score={score} setScore={setScore}/>

        <NumberSelector totalDice={totalDice} diceSelected={diceSelected}
        setDiceSelected={setDiceSelected} setErrMessage={setErrMessage}
        />
         </div>
        <RollDice totalDice={totalDice} diceSelected={diceSelected}
         setDiceSelected={setDiceSelected} rollDice={rollDice}
         setRollDice={setRollDice} setShowHelpPage={setShowHelpPage} setErrMessage={setErrMessage}
         setPrevDiceSelected={setPrevDiceSelected} setScore={setScore}
         />
         {(errMessage)?<ErrorPage errMessage={errMessage} setErrMessage={setErrMessage}/>: null}
        </>

    )
}