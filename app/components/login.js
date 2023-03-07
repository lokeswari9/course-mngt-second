import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import * as userAction from '../actions/userAction';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginData: {
                userName: '',
                password: ''
            },
            notification:''
        }

    }

    handleChange = (event) => {
        const { loginData } = this.state;
        loginData[event.target.name] = event.target.value;
        this.setState({ loginData });

    }

    handleLogin = (loginData, event) => {
        event.preventDefault();
        console.log(loginData)
        this.props.actions.loginUser(loginData);
     
    }

    componentWillReceiveProps = (nextProps) =>{
        if(nextProps.user.status === "success"){
            this.props.history.push("/courselist");
        }else{
            this.setState({notification:nextProps.user.message});
        }
    }

    render() {
        return (

            <div className="App">
            <div className="text-danger">{this.state.notification}</div>
                <h1>Login Page</h1>
                <div className="container">
                    <form>
                        <table className="table">
                            <tbody >
                                <tr><td><label htmlFor="uname"><b>Username</b></label></td>
                                    <td><input type="text" placeholder="Enter Username" name="userName" onChange={this.handleChange} /></td></tr>

                                <tr><td><label htmlFor="psw"><b>Password</b></label></td>
                                    <td><input type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} /></td></tr>
                            </tbody>
                        </table>
                    </form >
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(event) => this.handleLogin(this.state.loginData,event)}>Login</button>
                    <span>If not yet Registered  </span>
                    <Link to="/register">Please Register</Link>
                </div>
            </div>
        );
    }


}
const mapStateToProps = (state, nextProps) => {
    console.log(state)
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //loginUser: bindActionCreators(loginUser, dispatch)
        actions: bindActionCreators(userAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);