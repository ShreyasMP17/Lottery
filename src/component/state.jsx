import { useState } from "react";

const State = () => {

    let [value, setValue] = useState("e sala cup namde")
    let handleClick = (() => {
        setValue("howdu hulliya")
    })

    let [hunk, setHunk] = useState(0)
    let inc = (() => {
        setHunk(hunk + 1)
    })
    let des = (() => {
        setHunk(hunk - 1)
    })

    let reset = (() => {
        setHunk(hunk = 0)
    })
    return (
        <div className="state">
            <h1>{value}</h1>
            <button onClick={handleClick}>tapp</button>
            <h1>{hunk}</h1>
            <button onClick={inc}>+</button>
            <button onClick={reset}>0</button>
            <button onClick={des}>-</button>
        </div>
    );
}
export default State;