import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import ProfileButton from './ProfileButton';
// import LoginFormModal from '../LoginFormModal';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import './Navigation.css';
import { FaSearch, FaHome } from 'react-icons/fa';

function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        {/* <ProfileButton user={sessionUser} /> */}
        <NavLink to="/search"><FaSearch /></NavLink>
        <NavLink to="/form">Add Artist</NavLink>
        <button onClick={logout}>Log Out</button>
      </>
    );
  } else {
    sessionLinks = (
      <>
        {/* <LoginFormModal /> */}
        <NavLink to="/search"><FaSearch /></NavLink>
        <NavLink to="/form">Add Artist</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="navBar__container" >
      <div className="navBar__links">
        <NavLink exact to="/"><FaHome /></NavLink>
        {isLoaded && sessionLinks}
      </div>
    </div>
  );
}

export default Navigation;
