import React from 'react';


// import styles
import './App.scss';
import Header from "../Header/Header";


export default class App extends React.Component {
  render() {
    return (
      <div className="app__container">
        {this.props.children}
      </div>
    )
  }
}
