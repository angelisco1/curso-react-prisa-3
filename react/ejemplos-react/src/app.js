import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles.scss'
import { BrowserRouter } from 'react-router-dom'

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


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));