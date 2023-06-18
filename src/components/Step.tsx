type Props = {step: number, desc: string, nowStep: number}

export default function Step({step, desc, nowStep}: Props) {
    const style = {
        background: "#BFE2FD",
        color: "black",
        border: "none",
    }

    if (step === nowStep) {
        return (
            <div className="sideStep">
                <div className="stepCircle" style={style}>
                    <p>{step}</p>
                </div>
                <div className="txt">
                    <p>STEP {step}</p>
                    <h1>{desc}</h1>
                </div>
            </div>
        )
    }
    return (
        <div className="sideStep">
            <div className="stepCircle">
                <p>{step}</p>
            </div>
            <div className="txt">
                <p>STEP {step}</p>
                <h1>{desc}</h1>
            </div>
        </div>
    )
}