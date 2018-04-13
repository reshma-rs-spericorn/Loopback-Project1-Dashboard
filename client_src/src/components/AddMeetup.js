import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddMeetup extends Component {
  addMeetup(newMeetup) {
    axios.request({
      method: 'post',
      url: "http://localhost:3000/api/meetups",
      data: newMeetup
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }
  onSubmit(e) {
    const newMeetup = {
      name: this.refs.name.value,
      city: this.refs.city.value,
      address: this.refs.address.value
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
            <input type="text" name="city" ref="city" />
            <label htmlFor="city"> Info</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref="address" />
            <label htmlFor="address"> Description</label>
          </div>
          <input type="submit" value="Save" className="btn" />
        </form>
        <div className="fixed-action-btn">
          <Link to="/meetups/add" className="btn-floating btn-large red">
            <i className="fa fa-plus"></i></Link>
        </div>
      </div >

    )
  }
}

export default AddMeetup;