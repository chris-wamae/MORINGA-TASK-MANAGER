import React, { Component } from 'react';
import {Link} from "react-router-dom"

class LandingPage extends Component {
    render() {
        return (
            <>
            <main className='home-page'>
            <h1 id="main-header">Welcome to TodoApp!</h1>
            <div className='nav-div'>
            <Link to="/sign-up"><button type="button" class="btn btn-warning">SignUp</button></Link>
            <Link to="/sign-in"><button type="button" class="btn btn-dark">Login</button></Link>
            </div>
            </main>
            </>
        );
    }
}

export default LandingPage;