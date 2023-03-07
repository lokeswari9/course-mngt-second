import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';

class MyCourse extends Component {
    constructor() {
        super();
        this.state = {
            dataList : []
        }
    }
    update = (item) =>{
        console.log(item);
        this.props.history.push("/updateform/"+item.COURSE_ID);
    }
    getData = () => {
        console.log(this.props.user);
        const data = this.props.user.data[0].EMAILID;
        
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/course/rest/myEnrolledCourses', {"emailId": data}).then(function (response) {
                console.log(response)
                resolve(response);
            }).catch(function (error) {
                reject(error);
            });
        });
    }
    componentDidMount() {
        console.log(this.props.user);
        this.getData().then(response => {
            console.log(response)
            this.setState({ dataList: response.data });
            console.log(this.state.dataList)
      
        });

    }
    render() {
        return(
        <div>
            <Link to="courselist">Home</Link>
        <h1> welcome to Enrolled courses</h1>
                <table className="table table-striped" >
                    <thead>

                        <tr>
                            <th>CourseId</th>
                            <th>CourseName</th>
                            <th>STATUS</th>
                            <th>COMMENTS</th>
                            <th>TEACHOTHERS</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                     <tbody>
                        {
                           
                            this.state.dataList.map((item, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{item.COURSE_ID}</td>
                                        <td>{item.COURSE_NAME}</td>
                                        <td>{item.STATUS}</td>
                                        <td>{item.COMMENTS}</td>
                                        <td>{item.TEACHOTHERS}</td>
                                        <td><button onClick = {()=> this.update(item)}>Update</button></td>
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
const mapStateToProps = (state,nextProps) =>{
    console.log(state)
    return {
        user: state.user
    }

}
export default connect(mapStateToProps)(MyCourse);