const root = ReactDOM.createRoot(document.querySelector("#main-component"));
class YourTime extends React.Component {
  render() {
    return <h1>Время на момент открытия: {new Date().toLocaleTimeString()}</h1>;
  }
}
class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Привет {this.props.FirstName} {this.props.LastName}
        </h1>
        <h1>Сегодняшняя дата: {new Date().toLocaleDateString()}</h1>
        <YourTime />
      </div>
    );
  }
}
class HelloUser extends React.Component {
  render() {
    return (
      <Greeting
        FirstName={prompt("Введите ваше имя:")}
        LastName={prompt("Введите вашу фамилию:")}
      />
    );
  }
}
root.render(<HelloUser />);
