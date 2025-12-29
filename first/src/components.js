// stateless Functional Component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

// Stateful Class Component
// class extending component class
//render method returning HTML

class Welcome extends React.Component {
  render() {
    return <h1>Hello,{this.props.name}</h1>
  }
}