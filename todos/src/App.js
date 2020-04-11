import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

// class App extends Component {
//   render() {
//     return (
//       <div>
//           <AddTodo />
//           <VisibleTodoList />
//           <Footer />
//       </div>
//     );
//   }
// }

const App = ()=>(
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App;
