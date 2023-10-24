import React from 'react';
import { connect } from "react-redux";

import Admin from './admin';
import User from './regularUser';


const Footer = props => {
    const {role, dispatch} = props;

    return (
        role === 1?
        <Admin dispatch={dispatch}/>:
        <User dispatch={dispatch}/>
    )
}

const mapStateToProps = (state, props) => ({
    role:state.role,
  });

export default connect(mapStateToProps)(Footer);
