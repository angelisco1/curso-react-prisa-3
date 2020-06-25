import React, { Component } from 'react'

// const Ejemplo = (props) => {
//   const [color, setColor] = useState(0)

// }

export default class CajaColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: null,
      intervalId: null
    }
  }

  componentDidMount() {
    const id = setInterval(() => {
      console.log('Un mensaje...')
    }, 1000)

    this.setState({
      intervalId: id
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.color === nextState.color ? false : true;
  }

  static getDerivedStateFromProps(props, state) {
    const color = ['a', 'e', 'i', 'o', 'u'].includes(props.letra) ? 'green' : 'red';
    return {
      color: color
    }
  }

  render() {
    const { color } = this.state;

    console.log('Se pinta otra vez');

    const styles = {
      backgroundColor: color,
      width: '150px',
      height: '150px',
    }

    return (
      <div style={styles}>

      </div>
    )
  }
}
