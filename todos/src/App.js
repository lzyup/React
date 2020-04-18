import React, { Component } from 'react';
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

class App extends Component {
    componentDidMount(){
        // console.log('测试app的context----->', this.context.store);
    }

    render(){
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
                <p></p>
            </div>
        )
    }
}

export default App;
