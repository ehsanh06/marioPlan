import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedUpLinks';

const Navbar = props => {
    const { auth } = props;
    
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">
                    MarioPlan
                </Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
};

const mapStateToProps = state => {
    // console.log(state);

    return {
        auth: state.firebase.auth
    }
};

export default connect(mapStateToProps)(Navbar);