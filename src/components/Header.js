import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wLogo: 'https://vignette.wikia.nocookie.net/clubpenguin/images/a/ac/Wig_Icons_Placeholder_Post_2013.png/revision/latest?cb=20130131052254',
      avatar: 'https://avatars0.githubusercontent.com/u/5973189?s=400&v=4'
    }
  }

  render() {
    return (
      <div className="header__wrapper">
        <img className="header__logo" alt="Warner logo" src={this.state.wLogo}></img>
        <div className="header__links">
          <a>MOVIES</a>
          <a>MY MOVIE LIBRARY</a>
          <a>FAQ</a>
          <a>SEARCH</a>
        </div>
        <img className="header__logged-user" alt="avatar" src={this.state.avatar}></img>
      </div>
    );
  }
}

export default Header;
