
export default function HelpPage({ setShowHelpPage }) {

    const handleBackClick = () => {
        setShowHelpPage((prev) => { return (!prev) });
    }
    return (
        <>
        <div className="helpContainer">
                <h1>How to play dice game</h1>
                <div className="textContainer">
                    <p>1: Select any number</p>
                    <p>2: Click on dice image</p>
                    <p>3: If selected number is equal to dice number, </p>
                    <p>you will awarded with dice number</p>
                    <p>4: Selected number does not match with dice</p>
                    <p>then 1 point will be dedcuted </p>
                </div>
                <button onClick={handleBackClick}>Back</button>
        </div>
        </>
    )
}