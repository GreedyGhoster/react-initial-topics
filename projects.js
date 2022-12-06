// Here you will see your date and time
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

// subscribe to js
const button = document.querySelector("#button");
button.addEventListener("click", () => (button.textContent = "Thans"));

// subscribe to React
class Subscribe extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "Subsribe",
    };
  }
  changeMessage() {
    this.setState({
      content: "Thans",
    });
  }
  render() {
    return (
      <button onClick={() => this.changeMessage()}>{this.state.content}</button>
    );
  }
}
root.render(<Subscribe />);

// list of numbers to js
const numbers = [1, 2, 3, 4, 5];
const list = numbers.map((number) => <li>{number}</li>);
root.render(<ul>{list}</ul>);

// list of numbers to React
class NumberList extends React.Component {
  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) => (
      <li key={number.toString()}>{number}</li>
    ));
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
const numbersList = [1, 2, 3, 4, 5];
root.render(<NumberList numbers={numbersList} />);

//List persons to React
const persons = [
  {
    name: "Hunter",
    id: 1,
  },
  {
    name: "Jane",
    id: 2,
  },
  {
    name: "Lucy",
    id: 3,
  },
];
class PersonList extends React.Component {
  render() {
    const persons = this.props.person;
    const listItems = persons.map((person) => (
      <li key={person.id}>{person.name}</li>
    ));
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}
root.render(<PersonList person={persons} />);
