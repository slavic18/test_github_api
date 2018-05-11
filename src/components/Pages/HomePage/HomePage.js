import React from 'react';
import {NavLink} from 'react-router-dom';

// import components
import Header from './../../Header/Header';

// import styles
import './HomePage.scss';

const topFiveUsers = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="home__page">
        <Header title={"Home"}/>
        <div className="page__content">
          <h3 className="page__title">Top 5 Github Users</h3>
          <p>Tap the username to see more information</p>
          {topFiveUsers.map(item => (
            <NavLink
              key={item}
              to={`/user/${item}`}
              className="nav__link"

            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    )
  }
}
