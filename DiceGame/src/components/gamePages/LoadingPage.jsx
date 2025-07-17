export default function LoadingPage({ setGameStarted }) {
    const handleStartClick = () => {
        setGameStarted((prev) => { return (!prev) });
    }
    return (
        <>
            <div className="loadingContainer">
                <section className="imgSection">
                    <img src="./images/loading_dices.png" alt="loading_Dices" />
                </section>
                <section className="loadingContent">
                    <h1>Welcome to Dice Game</h1>
                    <button onClick={handleStartClick}><p>Start</p></button>
                </section>
            </div>
        </>
    )
}