import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

// import styles
import './Header.scss';


class Header extends React.Component {
  handleReturnButtonClick = () => {
    this.props.history.push('/');
  };

  render() {
    const {
      title,
      showReturnToHomeButton
    } = this.props;
    return (
      <div className="header">
        {showReturnToHomeButton ? <button className="button" onClick={this.handleReturnButtonClick}>
          <i className="fa fa-chevron-left"/>
        </button> : null}

        <div className="header__title">
          {title}
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  showReturnToHomeButton: PropTypes.bool,
}
Header.defaultProps = {
  title: '',
  showReturnToHomeButton: false
}

export default withRouter(Header);
