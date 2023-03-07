import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import axios from 'axios';

// import * as userAction from '../actions/userAction';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                name: '',
                password: '',
                sapId: '',
                emailId: '',
                primaryskill: '',
                band: ''
            }

        }
    }
    handleChange = (event) => {
        console.log(this.props)
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleLogin = (formData) => {
        const global = this;
        axios.post('http://localhost:3001/users/rest/registerUser', formData).then(function (response) {
            global.props.history.push("/");
        }).catch(function (error) {
            console.log(error);
        });
    }



    render() {
        return (
            <div className="App">
                <h1>Registration Page</h1>
                <div className="container">
                    <form >
                        <table className="table">
                            <tbody>
                                <tr><td><label htmlFor="name"><b>Username</b></label></td>
                                    <td><input type="text" placeholder="Enter Username" name="name" onChange={this.handleChange} /></td></tr>

                                <tr><td><label htmlFor="sapId"><b>SapID</b></label></td>
                                    <td><input type="number" placeholder="Enter SapId" name="sapId" onChange={this.handleChange} /></td></tr>

                                <tr><td><label htmlFor="emailId"><b>EmailID</b></label></td>
                                    <td><input type="text" placeholder="Enter EmailId" name="emailId" onChange={this.handleChange} /></td></tr>

                                <tr><td><label htmlFor="primaryskill"><b>PrimarySkill</b></label></td>
                                    <td><input type="text" placeholder="Enter PrimarySkill" name="primaryskill" onChange={this.handleChange} /></td></tr>

                                <tr><td><label htmlFor="band"><b>Band</b></label></td>
                                    <td><input type="text" placeholder="Enter Band" name="band" onChange={this.handleChange} /></td></tr>

                                <tr><td><label htmlFor="password"><b>Password</b></label></td>
                                    <td><input type="password" placeholder="Enter Password" name="password" onChange={this.handleChange} /></td></tr>

                            </tbody>

                        </table>
                    </form >
                </div>
                <div><button className="btn btn-primary" onClick={() => this.handleLogin(this.state.formData)}>Register</button>
                    <Link to="/">cancel</Link></div>
            </div>
        );
    }


}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         actions: bindActionCreators(userAction, dispatch)
//     }

export default Register;