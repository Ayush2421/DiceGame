
export default function NumberSelector({ totalDice, diceSelected, setDiceSelected, setErrMessage }) {
     const handleDiceClicked = (element) => {
        setDiceSelected(element);
        setErrMessage("");
    }
    return (
        <>
         <div className="numberSelectorContainer">
            {
                totalDice.map((element, index) => {
                    return (
                        //<div key={index} style={{ color: (element === diceSelected) ? "red" : "green"}}>
                            <div key={index} className="diceBtn" style={{ 
                                backgroundColor: (element === diceSelected) ? "black" : "white",
                                color: (element === diceSelected)? "white": "black"
                            }}
                            onClick={() => handleDiceClicked(element)}>
                            <h3>{element}</h3> </div>
                        //</div>
                    )
                })
            }
             </div>
        </>
    )
}