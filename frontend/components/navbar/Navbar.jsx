import React from 'react';
import { connect } from 'react-redux';

// Components
import Logo from './Logo';

class Navbar extends React.Component {
  render() {
    return (
      <nav id="Navbar">
        <Logo/>
        
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.users.currentUser ? true : false,
  currentUser: state.users.currentUser
});

export default connect(mapStateToProps, null)(Navbar);
