import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      startdate: '',
      enddate: '',
      projectsId: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.getMeetupDetails();
  }

  getMeetupDetails() {
    let meetupId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/tasks/${meetupId}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          startdate: response.data.startdate,
          enddate: response.data.enddate,
          taskassigned: response.data.taskassigned,
          status: response.data.status,
          logtime: response.data.logtime,
          file: response.data.file,
          comment: response.data.comment,
          priority: response.data.priority,
          projectsId: response.data.projectsId
        }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }

  editMeetup(newMeetup) {

    axios.request({
      method: 'put',
      url: `http://localhost:3000/api/projects/${this.state.projectsId}/tasks/${this.state.id}`,
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
      taskassigned: this.refs.taskassigned.value,
      status: this.refs.status.value,
      file: this.refs.file.value,
      comment: this.refs.comment.value,
      priority: this.refs.priority.value,
      logtime: this.refs.logtime.value
    }
    this.editMeetup(newMeetup);
    e.preventDefault();
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/tasks">Back</Link>
        <h1>Edit Meetup</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label htmlFor="name">Name</label>
          <div className="input-field">
            <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
          </div>
          <label htmlFor="name">Start Date</label>
          <div className="input-field">
            <input placeholder="Start Date" type="text" name="startdate" ref="startdate" value={this.state.startdate} onChange={this.handleInputChange} />

          </div>
          <label htmlFor="name">End Date</label>
          <div className="input-field">
            <input placeholder="End Date" type="text" name="enddate" ref="enddate" value={this.state.enddate} onChange={this.handleInputChange} />
          </div>
          <label htmlFor="name">Comment</label>
          <div className="input-field">
            <input type="text" name="comment" ref="comment" value={this.state.comment} onChange={this.handleInputChange} />
          </div>
          <label htmlFor="name">Priority</label>
          <div className="input-field">
            <input type="text" name="priority" ref="priority" value={this.state.priority} onChange={this.handleInputChange} />
          </div>
          <label htmlFor="name">Log Time</label>
          <div className="input-field">
            <input type="text" name="logtime" ref="logtime" value={this.state.logtime} onChange={this.handleInputChange} />
          </div>
          <label htmlFor="name">Task Assigned</label>
          <div className="input-field">
            <input type="text" name="task-assigned" ref="taskassigned" value={this.state.taskassigned} onChange={this.handleInputChange} />
          </div>
          <label htmlFor="name">Status</label>
          <div className="input-field">
            <input type="text" name="status" ref="status" value={this.state.status} onChange={this.handleInputChange} />
          </div>
          <label htmlFor="name">File</label>
          <div className="input-field">
            <input type="text" name="file" ref="file" value={this.state.file} onChange={this.handleInputChange} />
          </div>
          <div className="input-field">
            <input placeholder="Meetup id" type="text" name="projectsId" ref="projectsId" value={this.state.projectsId} onChange={this.handleInputChange} hidden />

          </div>


          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditTask;