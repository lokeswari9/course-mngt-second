import React, { Component } from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import './App.css';
import Login from './app/components/login';
import CourseList from './app/components/courseList';
import Register from './app/components/register';
import AddCourse from './app/components/addCourse';
import MyCourse from './app/components/myCourse';
import UpdateForm from './app/components/updateForm'
import Recommend from './app/components/recommend';
import RecommendHOC from './app/components/recommendHOC';
import NewMyCourse from './app/components/myCourseHOC';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Link to="mycoursehoc">MyCourseHOC</Link>
          <Link to="recommendhoc">RecommendHOC</Link>
        <Switch>
        <Route path="/mycoursehoc" component={NewMyCourse} />
        <Route path="/recommendhoc" component={RecommendHOC} />

          <Route path="/courselist" component={CourseList} />
          <Route path="/updateform/:courseIdParam" component={UpdateForm} />
          <Route path="/addcourse" component={AddCourse} />
          <Route path="/mycourse" component={MyCourse} />
          <Route path="/recommend" component={Recommend} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} exact/>
          <Route path="/" component={Login} exact/>

        </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
