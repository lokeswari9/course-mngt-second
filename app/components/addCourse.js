import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddCourse extends Component {
    constructor() {
        super();
        this.state = {
            addCourseData: {
                courseName: '',
                courseTitle: '',
                link: '',
                topic: []
                // topic: [{"topicName": "redux concept"}]
            },
            notification: '',
            // topic: [],
            textvalue: ''
        }
    }

    handleChange = (event) => {
        console.log(this.props)
        const { addCourseData } = this.state;
        addCourseData[event.target.name] = event.target.value;
        this.setState({ addCourseData });
    }

    handleLogin = (addCourseData) => {
        const global = this;
        
        axios.post('http://localhost:3001/course/rest/addNewCourse', addCourseData).then(function (response) {
            console.log(response);
            global.setState({ notification: response.data.message })
            //alert(global.state.notification)
            // global.props.history.push("/courselist");
        }).catch(function (error) {
            console.log(error);
        });
    }
    handle = (e) => {
        this.setState({
            textvalue: e.target.value
        })
    }
    add = (event) => {
        this.state.addCourseData.topic.push({ topicName: this.state.textvalue });
        this.setState(
            this.state
          )
          //this.state
          console.log(this.state.addCourseData.topic)
    }
    handledeleteItem = (v) =>{
        for(var i = 0; i < this.state.addCourseData.topic.length; i++){
          if(this.state.addCourseData.topic[i] === v){
             delete this.state.addCourseData.topic[i]
          }
        }
        this.setState({
          topic:this.state.addCourseData.topic
        })
        console.log(this.state.addCourseData.topic)
      }
    render() {
        return (
            <div>
                <div>
                    <Link to="/courselist">Home</Link>
                </div>
                <div>
                    <h1> Add Course</h1>
                    <div className="text-success">{this.state.notification}</div>
                    <table className="table table-striped" >
                        <tbody>
                            <tr><td><label htmlFor="courseName"><b>CourseName</b></label></td>
                                <td><input type="text" placeholder="Enter courseName" name="courseName" onChange={this.handleChange} /></td></tr>

                            <tr><td><label htmlFor="courseTitle"><b>CourseTitle</b></label></td>
                                <td><input type="text" placeholder="Enter courseTitle" name="courseTitle" onChange={this.handleChange} /></td></tr>

                            <tr><td><label htmlFor="link"><b>Link</b></label></td>
                                <td><input type="text" placeholder="Enter link" name="link" onChange={this.handleChange} /></td></tr>

                            <tr><td><label htmlFor="topic"><b>Topic</b></label></td>
                                <td><input type="text" placeholder="Enter topic" name="textvalue" onChange={this.handle} />
                                    <button type="button" onClick={this.add} className="btn btn-primary btn-sm">
                                        <span className="glyphicon glyphicon-plus"></span> Add
                                    </button></td></tr>



                            {this.state.addCourseData.topic.map((v) => {
                                return <div>
                                    <div className="font"><button className="btn-primary" onClick={() => this.handledeleteItem(v)}>Delete Item</button>{v.topicName}</div>
                                </div>

                            })}

                        </tbody>
                    </table>
                </div>

                <div><button className="btn btn-primary" onClick={() => this.handleLogin(this.state.addCourseData)}>Add Course</button>
                    <Link to="/courselist">cancel</Link></div>
            </div>
        );
    }
}
export default AddCourse;