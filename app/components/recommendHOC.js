import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {hoc} from './Hoc';

class RecommendHOC extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            notification:''
        }
    }
  
    enrole = (courseEnroled) =>{
        const data = {
            courseId : courseEnroled.courseId,
            courseName : courseEnroled.courseName,
            emailId : this.props.user.data[0].EMAILID
        }
        return new Promise((resolve, reject) => {
            const global = this;
            axios.post('http://localhost:3001/course/rest/enroleUser',data).then(function (response) {
                console.log(response)
                global.setState({notification:response.data.message});
            resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        });

    }

    render() {
        return (
            <div>
                <div className="text-success">{this.state.notification}</div>
                <Link to="courselist">Home</Link>
                <h1> Recommened courses</h1>
                <table className="table table-striped" >
                    <thead>

                        <tr>
                            <th>CourseId</th>
                            <th>CourseName</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {

                            this.props.list.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.courseId}</td>
                                        <td>{item.courseName}</td>
                                        <td><button onClick={() => this.enrole(item)}>Enrole</button></td>
                                    </tr>
                                )
                            })



                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

RecommendHOC = hoc(RecommendHOC,{url : 'http://localhost:3001/course/rest/recomendedCourses',isUser : true})
export default RecommendHOC;
