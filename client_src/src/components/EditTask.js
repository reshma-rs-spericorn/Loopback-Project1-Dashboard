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
      description: '',
      comment: '',
      status: '',
      priority: '',
      file: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillMount() {
    this.getMeetupDetails();
  }

  getMeetupDetails() {
    //get id from url
    let meetupId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/tasks/${meetupId}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          startdate: response.data.startdate,
          enddate: response.data.enddate,
          status: response.data.status.value,
          description: response.data.description.value,
          comment: response.data.comment.value,
          priority: response.data.priority.value,
          file: response.data.file.value,
        }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log("error"));
  }
  editMeetup(newMeetup) {
    axios.request({
      method: 'put',
      url: `http://localhost:3000/api/tasks/${this.state.id}`,
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
    this.editMeetup(newMeetup);
    e.preventDefault();
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <br />
        <Link to="/tasks" className="btn grey">Back</Link>
        <h3>Edit Task</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
            <label htmlFor="name"> Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="startdate" ref="startdate" value={this.state.startdate} onChange={this.handleInputChange} />
            <label htmlFor="startdate"> start date</label>
          </div>
          <div className="input-field">
            <input type="text" name="enddate" ref="enddate" value={this.state.enddate} onChange={this.handleInputChange} />
            <label htmlFor="enddate">end date</label>
          </div>

          <div className="input-field">
            <input type="text" name="description" ref="description" value={this.state.description} onChange={this.handleInputChange} />
            <label htmlFor="description"> description</label>
          </div>
          {/*<div className="input-field">
            <input type="text" name="log-time" ref="logtime" />
            <label htmlFor="log-time"> log</label>
    </div>*/}
          <div className="input-field">
            <input type="text" name="comment" ref="comment" value={this.state.comment} onChange={this.handleInputChange} />
            <label htmlFor="comment"> comment</label>
          </div>
          <div className="input-field">
            <input type="text" name="priority" ref="priority" value={this.state.priority} onChange={this.handleInputChange} />
            <label htmlFor="priority"> priority</label>
          </div>
          {/*<div className="input-field">
            <input type="text" name="task-assigned" ref="task-assigned" />
            <label htmlFor="task-assigned"> task</label>
    </div>*/}
          <div className="input-field">
            <input type="text" name="status" ref="status" value={this.state.status} onChange={this.handleInputChange} />
            <label htmlFor="status">status</label>
          </div>
          <div className="input-field">
            <input type="text" name="file" ref="file" value={this.state.file} onChange={this.handleInputChange} />
            <label htmlFor="file">file</label>
          </div>




          <input type="submit" value="Save" className="btn" />
        </form>
      </div >

    )
  }
}

export default EditTask;