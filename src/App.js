import { useState } from 'react';

const App = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    const handleInput = (value) => {
        if (value === "=") {
            try {
                const answer = eval(input);
                // Error when dividing by zero
                if (answer === Infinity || answer === -Infinity) {
                    setResult("Math Error");
                } else {
                    setResult(answer);
                }
            } catch (error) {
                setResult("Error");
            }
        } else if (value === "Ans") {
            setInput(prevInput => prevInput + result);
        } else if (value === "Del") {
            setInput(input.slice(0, -1));
        } else if (value === "C") {
            setInput("");
            setResult("");
        } else {
            setInput(input + value);
        }
    }

    return (
        <>
            <h1>Calculator</h1>
            <button className="theme-button" onClick={() => document.body.classList.toggle("dark-theme")}>
                <i class="material-icons">contrast</i>
            </button>

            <div id="calculator">
                <div>
                    <input type="text" name="expression" className="operation" value={input} readOnly />
                    <br />
                    <button name="=" className="calculate" onClick={() => handleInput("=")}>=</button>
                    <br />
                    <input type="text" name="result" className="result" value={result} readOnly />
                </div>

                <div>
                    <button name="ans" className="other" onClick={() => handleInput("Ans")}>Ans</button>
                    <button name="del" className="other" onClick={() => handleInput("Del")}>Del</button>
                    <button name="(" className="other" onClick={() => handleInput("(")}>(</button>
                    <button name=")" className="other" onClick={() => handleInput(")")}>)</button>
                </div>

                <div>
                    <button name="7" className="number" onClick={() => handleInput("7")}>7</button>
                    <button name="8" className="number" onClick={() => handleInput("8")}>8</button>
                    <button name="9" className="number" onClick={() => handleInput("9")}>9</button>
                    <button name="+" className="operator" onClick={() => handleInput("+")}>+</button>
                </div>
                
                <div>
                    <button name="4" className="number" onClick={() => handleInput("4")}>4</button>
                    <button name="5" className="number" onClick={() => handleInput("5")}>5</button>
                    <button name="6" className="number" onClick={() => handleInput("6")}>6</button>
                    <button name="-" className="operator" onClick={() => handleInput("-")}>-</button>
                </div>
                
                <div>
                    <button name="1" className="number" onClick={() => handleInput("1")}>1</button>
                    <button name="2" className="number" onClick={() => handleInput("2")}>2</button>
                    <button name="3" className="number" onClick={() => handleInput("3")}>3</button>
                    <button name="*" className="operator" onClick={() => handleInput("*")}>*</button>
                </div>
                
                <div>
                    <button name="0" className="number" onClick={() => handleInput("0")}>0</button>
                    <button name="." className="other" onClick={() => handleInput(".")}>.</button>
                    <button name="C" className="other" onClick={() => handleInput("C")}>C</button>
                    <button name="/" className="operator" onClick={() => handleInput("/")}>/</button>
                </div>
            </div>
        </>
    );
}

export default App;