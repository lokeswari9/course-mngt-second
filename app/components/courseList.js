import React, { Component } from 'react';
import axios from 'axios';
import Course from './course';
import { connect } from 'react-redux';

class CourseList extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            notification: ''

        }

    }
    myCourse = (courseEnroled) => {
        const that = this
        const data = {
            courseId: courseEnroled.courseId,
            courseName: courseEnroled.courseName,
            emailId: this.props.user.data[0].EMAILID
        }

        axios.post('http://localhost:3001/course/rest/enroleUser', data)
        .then(function (response) {
            console.log(response)
            that.setState({ notification: response.data.message });
            console.log(that.state)
        }).catch(function (error) {


        });
    }
    componentDidMount() {
        this.getData().then(response => {
            console.log(response)
            this.setState({ list: response.data });
            console.log('didmount')
            console.log(this.state.list)
        });

    }

    getData = () => {
        return new Promise((resolve, reject) => {
            axios.get('http://localhost:3001/course/rest/getAllCourse')
            .then(function (response) {
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        });
    }

    render() {
        console.log(this.state.notification)
        return (
            <div>
                {this.state.list.length}
                <Course list={this.state.list} myCourse={this.myCourse} notification={this.state.notification} />
            </div>
        )
    }
}
const mapStateToProps = (state, nextProps) => {
    console.log(state)
    return {
        user: state.user
    }

}

export default connect(mapStateToProps)(CourseList);