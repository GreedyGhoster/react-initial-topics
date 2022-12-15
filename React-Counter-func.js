const root = ReactDOM.createRoot(document.querySelector("#main-component"));
// Counter on the function component
function Counter() {
  const [counter, setCounter] = React.useState(0);
  function CounterMinus() {
    setCounter(counter - 1);
  }
  function CounterPlus() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h1>Counter:</h1>
      <div className="counter">
        <h1>{counter}</h1>
        <div className="buttons">
          <div>
            <button className="counter-minus" onClick={() => CounterMinus()}>
              Minus
            </button>
          </div>
          <div>
            <button className="counter-plus" onClick={() => CounterPlus()}>
              Plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
root.render(<Counter />);
