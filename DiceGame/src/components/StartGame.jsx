import {useState } from "react";
import LoadingPage from "./gamePages/LoadingPage";
import MainGamePage from "./gamePages/MainGamePage";
import HelpPage from "./gamePages/HelpPage";
import "./gamePages/CSS/gamePages.css"

export default function StartGame() { 
    const [gameStarted, setGameStarted] = useState(false);
    const [showHelpPage, setShowHelpPage] = useState(false);
    
     return (
        <>
         {
          gameStarted ? !showHelpPage? <MainGamePage setShowHelpPage={setShowHelpPage} />: <HelpPage setShowHelpPage={setShowHelpPage}/> : 
          <LoadingPage setGameStarted={setGameStarted}/>
        }
        </>

    )
}