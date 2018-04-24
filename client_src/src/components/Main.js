import React from 'react';
import { Switch, Route, Link, Router } from "react-router-dom";

import { browserHistory } from 'react-router';
import Meetups from "./Meetups";
import About from "./About";
import MeetupDetails from './MeetupDetails';
import AddMeetup from "./AddMeetup";
import EditMeetup from "./EditMeetup";
import Projects from "./Projects";
//import ProjectDetails from './ProjectDetails';
import AddProject from "./AddProject";
import EditProject from "./EditProject";
import Tasks from "./Tasks";
import TaskDetails from './TaskDetails';
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import Dashboard from './Dashboard';
import Card from './Card';
import Files from './Files';

const Main = () => (
  <main>
    <Switch >
      <Route exact path="/" component={Dashboard} />
      <Route path="/card" component={Card} />
      <Route path="/files" component={Files} />
      <Route path="/projects/:id/tasks/add" component={AddTask} />
      <Route path="/tasks/edit/:id" component={EditTask} />
      <Route path="/projects/:id/tasks/:id" component={TaskDetails} />
      <Route path="/projects/:id/tasks" component={Tasks} />
      <Route path="/projects/add" component={AddProject} />
      <Route path="/projects/edit/:id" component={EditProject} />
      {/* <Route path="/projects/:id" component={ProjectDetails} /> */}
      <Route path="/projects" component={Projects} />
      <Route path="/meetups" component={Meetups} />
      <Route path="/about" component={About} />
      <Route path="/meetups/add" component={AddMeetup} />
      <Route path="/meetups/edit/:id" component={EditMeetup} />
      <Route path="/meetups/:id" component={MeetupDetails} />


    </Switch>
  </main>
)

export default Main;
