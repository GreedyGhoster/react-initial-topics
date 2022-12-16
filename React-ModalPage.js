const root = ReactDOM.createRoot(document.querySelector("#main-component"));
// Modal page on React for abrupt opening/closing
class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  OpenBlock() {
    this.setState({
      open: true,
    });
  }
  CloseBlock() {
    this.setState({
      open: false,
    });
  }
  render() {
    return (
      <div className="parent-block">
        <button onClick={() => this.OpenBlock()}>Open Modal</button>
        {this.state.open && (
          <div className="overlay">
            <div className="modal">
              <h3>Hello</h3>
              <p>This is a modal page</p>
              <button onClick={() => this.CloseBlock()}>Close Modal</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
root.render(<ModalPage />);
// Someday I will do it with animation
