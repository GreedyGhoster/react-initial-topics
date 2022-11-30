const root = ReactDOM.createRoot(document.querySelector("#main-component"));
function YourTime() {
  return <h1>Время на момент открытия: {new Date().toLocaleTimeString()}</h1>;
}
function Greeting(props) {
  return (
    <div>
      <h1>
        Привет {props.FirstName} {props.LastName}
      </h1>
      <h1>Сегодняшняя дата: {new Date().toLocaleDateString()}</h1>
      <YourTime />
    </div>
  );
}

function HelloUser() {
  return (
    <Greeting
      FirstName={prompt("Введите ваше имя:")}
      LastName={prompt("Введите вашу фамилию:")}
    />
  );
}

root.render(HelloUser());
