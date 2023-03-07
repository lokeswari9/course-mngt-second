import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { hoc } from './Hoc';


class MyCourseHOC extends Component {
    constructor(props) {
        super();
        console.log(this.props)
        this.state = {
            list: []
        }
    }
    update = (item) => {
        console.log(item);
        this.props.history.push("/updateform/" + item.COURSE_ID);
    }

    
    render() {
        return (
            <div>
                <Link to="courselist">Home</Link>
                <h1> welcome to Enrolled courses</h1>
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
                                        <td>{item.COURSE_ID}</td>
                                        <td>{item.COURSE_NAME}</td>
                                        <td><button onClick={() => this.update(item)}>Update</button></td>
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

const NewMyCourse = hoc(MyCourseHOC, { url: 'http://localhost:3001/course/rest/myEnrolledCourses' })
export default NewMyCourse;