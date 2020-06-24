import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// const App = () => {
//   return React.createElement(
//           'div',
//           null,
//           React.createElement(
//             'div',
//             null,
//             React.createElement('h1', null, 'Hola Ángel')
//           ),
//           React.createElement('p', null, 'Un párrafo'),
//         )
// }


ReactDOM.render(<App />, document.getElementById('app'));