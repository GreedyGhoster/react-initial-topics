const root = ReactDOM.createRoot(document.querySelector("#main-component"));
function Greeting(props) {
  return (
    <div>
      <h1>Hello {props.NameUser}</h1>
    </div>
  );
}
const HelloUser = <Greeting NameUser={prompt("Введите ваше имя:")} />;
root.render(HelloUser);
