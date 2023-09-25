import { MouseEvent, useState } from "react";
import "./App.css";
import CalculatorSwitch from "./components/calculator-switch";

function App() {
  const [result, setResult] = useState("0");
  const [operation, setOperation] = useState("");
  const [operator, setOperator] = useState("");
  const [initOperation, setInitOperation] = useState(false);

  const handleClick = (e: MouseEvent) => {
    const button = e.target as HTMLButtonElement;
    switch (button.name) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        {
          if (initOperation) {
            setResult(button.name);
            setInitOperation(false);
          } else {
            const resultNotZero = result === "0" ? "" : result;
            setResult(`${resultNotZero}${button.name}`);
          }
        }
        break;
      case "x":
        {
          setInitOperation(true);
          setOperation(result);
          setOperator("*");
        }
        break;
      case "-":
      case "/":
      case "+":
        {
          setInitOperation(true);
          setOperation(result);
          setOperator(button.name);
        }
        break;
      case "=":
        {
          setInitOperation(true);
          setResult(eval(operation + operator + result));
        }
        break;
      case "reset":
        {
          setResult("0");
          setOperation("");
          setOperator("");
          setInitOperation(false);
        }
        break;
      case "del":
        {
          if (result.length === 1) {
            setResult("0");
            setInitOperation(true);
          } else {
            setResult(result.slice(0, -1));
          }
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className="calculator__container">
      <main className="calculator">
        <header className="calculator__header">
          <h1>calc</h1>
          <CalculatorSwitch />
        </header>

        <section className="calculator__result">
          <div>
            <small>
              {operation} {operator}
            </small>
          </div>
          <h2>{result}</h2>
        </section>

        <section className="calculator__actions">
          <button onClick={handleClick} className="calculator__btn" name="7">
            7
          </button>
          <button onClick={handleClick} className="calculator__btn" name="8">
            8
          </button>
          <button onClick={handleClick} className="calculator__btn" name="9">
            9
          </button>
          <button
            onClick={handleClick}
            className="calculator__btn btn__del"
            name="del"
          >
            DEL
          </button>
          <button onClick={handleClick} className="calculator__btn" name="4">
            4
          </button>
          <button onClick={handleClick} className="calculator__btn" name="5">
            5
          </button>
          <button onClick={handleClick} className="calculator__btn" name="6">
            6
          </button>
          <button onClick={handleClick} className="calculator__btn" name="+">
            +
          </button>
          <button onClick={handleClick} className="calculator__btn" name="3">
            3
          </button>
          <button onClick={handleClick} className="calculator__btn" name="2">
            2
          </button>
          <button onClick={handleClick} className="calculator__btn" name="1">
            1
          </button>
          <button onClick={handleClick} className="calculator__btn" name="-">
            -
          </button>
          <button onClick={handleClick} className="calculator__btn" name=".">
            .
          </button>
          <button onClick={handleClick} className="calculator__btn" name="0">
            0
          </button>
          <button onClick={handleClick} className="calculator__btn" name="/">
            /
          </button>
          <button onClick={handleClick} className="calculator__btn" name="x">
            x
          </button>
          <button
            onClick={handleClick}
            className="calculator__btn btn__reset"
            name="reset"
          >
            RESET
          </button>
          <button
            onClick={handleClick}
            className="calculator__btn btn__equal"
            name="="
          >
            =
          </button>
        </section>
      </main>
    </div>
  );
}
export default App;
