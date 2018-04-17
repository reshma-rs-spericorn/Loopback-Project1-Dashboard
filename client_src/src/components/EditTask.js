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
      enddate: this.refs.enddate.value
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
          <div className="input-field">
            <input placeholder="Name" type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />

          </div>
          <div className="input-field">
            <input placeholder="Start Date" type="text" name="startdate" ref="startdate" value={this.state.startdate} onChange={this.handleInputChange} />

          </div>
          <div className="input-field">
            <input placeholder="End Date" type="text" name="enddate" ref="enddate" value={this.state.enddate} onChange={this.handleInputChange} />

          </div>
          <div className="input-field">
            <input placeholder="Meetup id" type="text" name="projectsId" ref="projectsId" value={this.state.projectsId} onChange={this.handleInputChange} />

          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
      </div>
    )
  }
}

export default EditTask;