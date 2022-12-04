// Here we will see your date and time
class YourTime extends React.Component {
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return <h1>Время: {new Date().toLocaleTimeString()}</h1>;
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