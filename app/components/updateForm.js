import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


class UpdateForm extends Component {
    constructor(props) {
        super(props);
        console.log(props.match.params.courseIdParam)
        this.state = {
            updateData: {
                comments: '',
                status: '',
                teachOthers: '',
                courseId: props.match.params.courseIdParam,
                emailId: this.props.user.data[0].EMAILID
            },
            notification: ''
        }
    }
    handleChange = (event) => {
        const { updateData } = this.state;
        updateData[event.target.name] = event.target.value;
        this.setState({ updateData });

    }

    handleUpdate = (updateData, event) => {
        event.preventDefault();
        console.log(updateData)
        const global = this;
        axios.post('http://localhost:3001/course/rest/updateStatus', updateData)
        .then(function (response) {
            console.log(response);
            global.setState({ notification : response.data.message });
            // alert(global.state.notification);
           // setTimeout(global.props.history.push("/mycourse"),100000);
        }).catch(function (error) {
            console.log(error);
        });


    }

    render() {
        console.log(this.state.updateData.courseId)
        return (

            <div className="App">
               <div className="text-success"> {this.state.notification}</div>
                {/* -------{this.state.updateData.courseId} */}
                <h1>Update Page</h1>
                <Link to="/courselist">Home</Link>
                <div className="container">
                    <form>
                        <table className="table">
                            <tbody >
                                <tr><td><label htmlFor="comments"><b> comments</b></label></td>
                                    <td><input type="textbox" placeholder="Enter Username" name="comments" onChange={this.handleChange} /></td></tr>

                                <tr><td><label htmlFor="status"><b>status</b></label></td>
                                    <td><input type="text" placeholder="Enter Password" name="status" onChange={this.handleChange} /></td></tr>

                                <tr><td><label htmlFor="teachOthers"><b>teachOthers</b></label></td>
                                <td><input type="checkbox"  name="teachOthers" onClick={this.handleChange} value="YES"/></td></tr> 
                            </tbody>
                        </table>
                    </form >
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(event) => this.handleUpdate(this.state.updateData, event)}>Update</button>
                    <Link to="mycourse">Cancel</Link>
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
export default connect(mapStateToProps)(UpdateForm);