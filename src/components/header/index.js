/**
 * Created by stasMaslow on 6/28/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
            <div className="nav">
                <ul>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </header>
    );
  }
}

export default Header;
