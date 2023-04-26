import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {
  Link
} from "react-router-dom";
import './Nav.css'

function Nav() {
  return (
    <div className="Nav">
      <Link to="/">Welcome </Link>
      <Link to="/Idea">Idea </Link>
      <Link to="/Info">Info </Link>
      <Link to="/FAQ">FAQ </Link>
      <Link to="/Contact">Contact </Link>
    </div>
  )
}

export default Nav
