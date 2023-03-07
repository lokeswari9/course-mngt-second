import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Course extends Component {

    enrole = (courseEnroled) => {
        this.props.myCourse(courseEnroled);
    }

    render() {
        return (
            <div>
                <Link to="courselist">Home</Link>
                <Link to="addcourse">Add Course </Link>
                <Link to="mycourse">My Courses </Link>
                <Link to="recommend">Recommendations</Link>
                <div className="text-success">{this.props.notification}</div>
                <h1> welcome to courses</h1>




                <table className="table table-striped" >
                    <thead>

                        <tr>
                            <th>CourseId</th>
                            <th>CourseName</th>
                            <th>CourseTitle </th>
                            {/* <th>Link</th> */}
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

                                        <td>{item.title.map((item1, j) => {
                                            return (

                                                <ul key={j}>
                                                <h6>courseTitle</h6>
                                                    <li>{item1.courseTitle}</li>
                                                    <h6>link</h6>
                                                    <li>{item1.link}</li>


                                                    <ul>{item1.topic.map((item2, k) => {
                                                        return (

                                                            <ul key={k}>
                                                                <h6>TopicId</h6>
                                                                <li>{"topicId  "+item2.topicId}</li>
                                                                <h6>TopicsName</h6>
                                                                <li>{"TopicName  "+item2.topicName}</li>

                                                            </ul>

                                                        )
                                                    })}</ul>
                                                </ul>

                                            )
                                        })}</td>
                                        <td><button className="btn-primary" onClick={() => this.enrole(item)}>Enrole Course</button></td>
                                    </tr>
                                )

                            })




                        }
                    </tbody>
                </table>
            </div >
        )
    }
}

export default Course;