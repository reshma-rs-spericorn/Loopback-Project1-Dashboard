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
      enddate: this.refs.enddate.value
    }
    this.addMeetup(newMeetup);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/tasks">Back</Link>
        <h1>Add Meetup</h1>
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
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default AddTask;