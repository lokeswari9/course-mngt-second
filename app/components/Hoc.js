import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


export const hoc = (Wrapped, input) => {
    class hocClass extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            }
        }
        getData = () => {
            console.log(this.props.user);
            const data = this.props.user.data[0].EMAILID;

            return new Promise((resolve, reject) => {
                axios.post(input.url, { "emailId": data }).then(function (response) {
                    console.log(response)
                    resolve(response);
                }).catch(function (error) {
                    reject(error);
                });
            });
        }
        componentDidMount() {
            console.log("component did mount", this)
            this.getData().then(response => {
                let data = input.isUser ? response.data : response.data;
                this.setState({ data });
            });
        }
       
        render() {
            return (
                <Wrapped list={this.state.data} />
            )
        };
    }
    const mapStateToProps = (state, nextProps) => {
        console.log(state)
        return {
            user: state.user
        }
    }
    return connect(mapStateToProps)(hocClass);
    //return hocClass;
}


