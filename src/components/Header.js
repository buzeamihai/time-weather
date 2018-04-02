import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper row lime">
                    <Link to="/" className="brand-logo">Time&Weather</Link>
                    <ul className="right">
                        <li>
                            <Link to="/time"><i className="material-icons">access_time</i></Link>
                        </li>
                        <li>
                            <Link to="/weather"><i className="material-icons">cloud_queue</i></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;