const root = ReactDOM.createRoot(document.querySelector("#main-component"));
function Greeting(props) {
  return (
    <div>
      <h1>
        Привет {props.FirstName} {props.LastName}
      </h1>
    </div>
  );
}
function HelloUser() {
  return (
    <div>
      <Greeting
        FirstName={prompt("Введите ваше имя:")}
        LastName={prompt("Введите вашу фамилию")}
      />
    </div>
  );
}
root.render(HelloUser());
