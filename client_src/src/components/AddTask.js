import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class AddTask extends Component {
  addMeetup(newMeetup) {
    let meetupId = this.props.match.params.id;
    axios.request({
      method: 'post',
      url: `http://localhost:3000/api/projects/${meetupId}/tasks`,
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
      comment: this.refs.comment.value,
      priority: this.refs.priority.value,
      file: this.refs.file.value
    }
    this.addMeetup(newMeetup);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <br />
        <Link to="/" className="btn grey">Back</Link>
        <h3>Add Task</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name"> Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="startdate" ref="startdate" />
            <label htmlFor="startdate"> start</label>
          </div>
          <div className="input-field">
            <input type="text" name="enddate" ref="enddate" />
            <label htmlFor="enddate">end</label>
          </div>
          <div className="input-field">
            <input type="text" name="description" ref="description" />
            <label htmlFor="description"> description</label>
          </div>
          {/*<div className="input-field">
            <input type="text" name="log-time" ref="logtime" />
            <label htmlFor="log-time"> log</label>
    </div>*/}
          <div className="input-field">
            <input type="text" name="comment" ref="comment" />
            <label htmlFor="comment"> comment</label>
          </div>
          <div className="input-field">
            <input type="text" name="priority" ref="priority" />
            <label htmlFor="priority"> priority</label>
          </div>
          {/*<div className="input-field">
            <input type="text" name="task-assigned" ref="task-assigned" />
            <label htmlFor="task-assigned"> task</label>
    </div>*/}
          <div className="input-field">
            <input type="text" name="status" ref="status" />
            <label htmlFor="status">status</label>
          </div>
          <div className="input-field">
            <input type="text" name="file" ref="file" />
            <label htmlFor="file">file</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
        <div className="fixed-action-btn">
          <Link to="/tasks/add" className="btn-floating btn-large red">
            <i className="fa fa-plus"></i></Link>
        </div>
      </div >

    )
  }
}

export default AddTask;