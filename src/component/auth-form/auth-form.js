import React from 'react';
import PropTypes from 'prop-types';
import '../auth-form/auth-form.scss';

const emptyState = {
    username: '',
    email: '',
    password: '',

};


class AuthForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = emptyState;
    }

    handleChange = (event) => {
        // event.preventDefault();
        const { name, value } = event.target;
        this.setState({[name]: value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onComplete(this.state);
        this.setState(emptyState);
    };

    render() {
        let { type } = this.props;
        type = type === 'login' ? 'login' : 'signup';

        const signupJSX =
            <input className="signUp"
                   name='email'
                   placeholder='email'
                   type='email'
                   value={this.state.email}
                   onChange={this.handleChange}
            />;

        return(
            <div className="formLayout">
                <form onSubmit={this.handleSubmit}>
                    <input className="signUp"
                           name='username'
                           placeholder='username'
                           type='text'
                           value={this.state.username}
                           onChange={this.handleChange}
                    />
                    { type !== 'login' ? signupJSX : undefined }

                    <input className="signUp"
                           name='password'
                           placeholder='password'
                           type='password'
                           value={this.state.password}
                           onChange={this.handleChange}
                    />
                    <button className='button' type='submit'>{type}</button>
                </form>
            </div>
        );
    }
}

AuthForm.propTypes = {
    onComplete: PropTypes.func,
};

export default AuthForm;
