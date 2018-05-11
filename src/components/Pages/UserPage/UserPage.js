import React from 'react';

// import components
import Header from './../../Header/Header';
import Preloader from './../../Preloader/Preloader';

// import styles
import './UserPage.scss';

// import api services
import GithubUserService from "../../../api/GithubUserService";


class UserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPreloader: true
    }
  }

  componentDidMount() {
    // get current user name
    const {match: {params: {name}}} = this.props;

    // fetch github api
    GithubUserService.fetchOne(name)
      .then(data => {
        this.setState({
          showPreloader: false,
          ...data
        })
      })
      .catch(e => {
        console.log(e.message);
      });
  }

  renderPreloader() {
    if (this.state.showPreloader) {
      return <Preloader/>
    }
  }

  renderUserList() {
    if (!this.state.showPreloader) {
      const {
        name,
        avatar_url,
        location,
      } = this.state;
      return (
        <div className="user__list">
          <div className="user__list__item">
            <div className="user__list__item__avatar">
              <img className="user__list__item__avatar__image" src={avatar_url}/>
            </div>
            <div className="user__list__item__description__container">
              <div className="user__list__item__title">
                {name}
              </div>
              <div className="user__list__item__location">
                {location}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="user__page">
        <Header title={"Person"} showReturnToHomeButton={true}/>
        <div className="page__content">
          {this.renderPreloader()}
          {this.renderUserList()}
        </div>
      </div>
    )
  }
}

UserPage.defaultProps = {
  match: {
    params: {}
  }
}

export default UserPage;
