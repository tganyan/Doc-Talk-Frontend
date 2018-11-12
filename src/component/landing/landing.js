import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as routes from '../../routes';
import * as authActions from '../../action/auth';
import AuthForm from '../auth-form/auth-form';


class Landing extends React.Component {

    handleLogin = (user) => {
        return this.props.pDoLogin(user)
            .then(() => {
                this.props.history.push(routes.DASHBOARD);
            })
            .catch(console.error);
    };

    handleSignup = (user) => {
        return this.props.pDoSignUp(user)
            .then(() => {
                this.props.history.push(routes.DASHBOARD);
            })
            .catch(console.error);
    };

    render() {
        const rootJSX = <div>
            <Link to='/'><h2>Welcome to DocTalk!</h2></Link>
            <Link to='/signup'>Sign up for DocTalk</Link>
            <Link to='/login'>Login to DocTalk</Link>
        </div>;

        const signUpJSX = <div>
            <Link to='/'><h2>DocTalk</h2></Link>
            <h3>Sign Up</h3>
            <AuthForm
                type='signup'
                onComplete={this.handleSignup}
            />
            <p>Already have an account?</p>
            <Link to='/login'> Login to DocTalk</Link>
        </div>;

        const loginJSX = <div>
            <Link to='/'><h2>DocTalk</h2></Link>
            <h3>Login</h3>
            <AuthForm
                type='login'
                onComplete={this.handleLogin}
            />
            <p>Do not have an account?</p>
            <Link to='/signup'>Sign up for DocTalk</Link>
        </div>;

        const { location } = this.props;
        console.log(location);

        return (
            <section>
                { location.pathname === routes.ROOT ? rootJSX : undefined }
                { location.pathname === routes.SIGNUP ? signUpJSX : undefined }
                { location.pathname === routes.LOGIN ? loginJSX : undefined }
            </section>
        )
    }
}

const mapStateToProps = state =>({
    // token: state.token,
});

const mapDispatchToProps = dispatch => ({
    pDoSignUp: user => dispatch(authActions.signupRequest(user)),
    pDoLoginIn: user => dispatch(authActions.loginRequest(user)),

});

Landing.propTypes = {
    // token: PropTypes.string,
    pDoSignUp: PropTypes.func,
    pDoLoginIn:PropTypes.func,
    location: PropTypes.object,
};

export default connect(mapStateToProps,mapDispatchToProps)(Landing);
