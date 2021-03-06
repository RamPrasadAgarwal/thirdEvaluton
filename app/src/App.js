import React, { Component } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Reload from './components/reload/reload';
import Books from './components/books/books';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 2,
    };
  }
  render() {
    if (this.state.page === 1) {
      return (
        <div>
          <Sidebar />
          <Reload message1="Oops! No books found!" message2="Import them now ?" />
        </div>
      );
    }
    return (
      <div>
        <Sidebar />
        <Books />
      </div>
    );
  }
}
export default App;
