const User = {
  firstName: "Oleg",
  lastName: "Stepanov",
  age: 20,
};
const hello = function () {
  return `
      Hello, ${User.firstName} ${User.lastName}. You ${User.age} years old
    `;
};

const object = ReactDOM.createRoot(document.querySelector("#main-component"));

function hellobye() {
  const element = (
    <div>
      <h1>{hello()}</h1>
      <h2>Goodbye</h2>
    </div>
  );
  object.render(element);
}
hellobye();
