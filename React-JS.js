const root = ReactDOM.createRoot(document.querySelector("#main-component"));
class RootUser extends React.Component {
  render() {
    return (
      <div>
        <h1>Привет администратор страницы</h1>
        <h1>Вам нужно сделать домашнюю работу!!!</h1>
      </div>
    );
  }
}
class SimpleUser extends React.Component {
  render() {
    return (
      <div>
        <h1>Привет обычный пользователь!!!</h1>
        <h1>Логин и пароль администратора это не Root и Root!</h1>
      </div>
    );
  }
}
class Greeting extends React.Component {
  render() {
    if (
      (this.props.checkLogin == "root") &
      (this.props.checkPassword == "root")
    ) {
      return <RootUser />;
    } else {
      return <SimpleUser />;
    }
  }
}
root.render(
  <Greeting
    checkLogin={prompt("Введите логин:")}
    checkPassword={prompt("Введите пароль:")}
  />
);
