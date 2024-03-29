// Code goes here

var Button = React.createClass({
  getInitialState: function() {
    return {counter: 9};
  },
  handleClick: function() {
    this.setState({ counter: this.state.counter+1})
  },
  render: function() {
    return (
      <button onClick={this.handleClick}>{this.state.counter}</button>
    )
  }
});

React.render(<Button />, document.getElementById("root"));
