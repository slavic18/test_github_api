import React from 'react';

// import components
import Header from './../../Header/Header';

// import styles
import './ErrorPage.scss';


export default class ErrorPage extends React.Component {
  render() {
    return (
      <div className="error__page">
        <Header title={"Error page"} showReturnToHomeButton/>
        Sorry but this page doesn't exists
      </div>
    )
  }
}
