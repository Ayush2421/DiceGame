
export default function RollDice({ totalDice, diceSelected, setShowHelpPage, setDiceSelected, rollDice,
    setRollDice, setPrevDiceSelected, setScore, setErrMessage }) {

    const handleRollDice = () => {
        if (diceSelected) {
            checkDuplicateRandomNumber();
        } else {
            setErrMessage("Please Select the Dice");
            setDiceSelected(null);
        }
    }
    const checkDuplicateRandomNumber = () => {
        const randomNumber = Math.ceil((Math.random() * 10) % totalDice.length);
        if (rollDice !== randomNumber) {
            setRollDice(randomNumber);
            setPrevDiceSelected(diceSelected);
            setDiceSelected(null);
        } else {
            checkDuplicateRandomNumber();
        }
    }
    //handle Reset Btn.
    const handleReset = () => {
        setRollDice(1);
        setDiceSelected(null);
        setScore(0);
        setPrevDiceSelected(0);
    }
    //handle Game Rule.
    const handleGameRule = () => {
        setShowHelpPage(true);
    }

    return (
        <>
            <div className="rollDiceContainer">
                <div className="rollDiceContent">
                    <img onClick={(() => { handleRollDice() })} src={`./images/dices/dice_${rollDice}.png`} alt="dice" />
                    <h1>CLICK ME 👆</h1>
                </div>
                <div className="footerBtn">
                    <button onClick={(handleReset)} >Reset </button>
                    <button onClick={(() => { handleGameRule() })} >Game Rule </button>
                </div>
            </div>
        </>
    )
}