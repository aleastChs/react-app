import React, { Component } from 'react';
import Header from './header.js';
import TableRow from './TableRow.jsx';

class App extends Component {
    constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
    }
    render() {
        return (
            <div>
                <Header text='Hello World'/>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;