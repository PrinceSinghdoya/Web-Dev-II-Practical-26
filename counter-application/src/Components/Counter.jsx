import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    console.log({ count });

    const handleAdd = () => {
        return setCount(count + 1);
    };

    const handleSub = () => {
        return setCount(count - 1);
    };

    const handleReset = () => {
        return setCount(0);
    };
    
    return (
        <div>
            <h1 style={{ color: "#fafafa" }}>Count : {count}</h1>
            <div style={{ padding: "10px", display: "flex", justifyContent: "center", gap: "20px" }}>
                <button onClick={handleAdd} style={{ color: "#7c73e6", backgroundColor: "#ffe9e3", borderRadius: "20px", border: "none" }}>Add</button>
                <button onClick={handleSub} disabled={count < 1} style={{ color: "#7c73e6", backgroundColor: "#ffe9e3", borderRadius: "20px", border: "none" }}>Reduce</button>
                <button onClick={handleReset} style={{ color: "#7c73e6", backgroundColor: "#ffe9e3", borderRadius: "20px", border: "none" }}>Reset</button>
            </div>
        </div>
    )
}
export default Counter