import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      meetups: []
    }
  }
  addMeetup(newMeetup) {
    let meetupsId = this.props.match.params.id;
    axios.request({
      method: 'post',
      url: `http://localhost:3000/api/projects/${meetupsId}/tasks`,
      data: newMeetup
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e) {
    const newMeetup = {
      name: this.refs.name.value,
      startdate: this.refs.startdate.value,
      enddate: this.refs.enddate.value,
      status: this.refs.status.value,
      description: this.refs.description.value,
      logtime: this.refs.logtime.value,
      comment: this.refs.comment.value,
      priority: this.refs.priority.value,
      file: this.refs.file.value,
      taskassigned: this.refs.taskassigned.value
    }
    this.addMeetup(newMeetup);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/tasks">Back</Link>
        <h1>Add Task</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="startdate" ref="startdate" />
            <label htmlFor="startdate">startdate</label>
          </div>
          <div className="input-field">
            <input type="text" name="enddate" ref="enddate" />
            <label htmlFor="enddate">enddate</label>
          </div>
          <div className="input-field">
            <textarea type="text" name="description" ref="description" className="materialize-textarea" />
            <label htmlFor=" description"> description</label>
          </div>
          <div className="input-field">
            <input type="text" name="logtime" ref="logtime" />
            <label htmlFor="logtime"> log</label>
          </div>
          <div className="input-field">
            <input type="text" name="comment" ref="comment" />
            <label htmlFor="comment"> comment</label>
          </div>
          <div className="input-field">
            <input type="text" name="priority" ref="priority" />
            <label htmlFor="priority"> priority</label>
          </div>
          <div className="input-field">
            <input type="text" name="taskassigned" ref="taskassigned" />
            <label htmlFor="taskassigned"> task</label>
          </div>
          <div className="input-field">
            <select name="status" ref="status" >
              <option value="" disabled="disabled" selected="selected">Status</option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="input-field">
            <input type="text" name="file" ref="file" />
            <label htmlFor="file">file</label>
          </div>


          {/*<div className="file-field input-field">
            <div className="btn">
              <span>File</span>
              <input type="file" />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" name="file" ref="file"/>
            </div>
    </div>*/}
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddTask;