import React, { Component } from 'react';
import axios from 'axios';
import MeetupItem from './MeetupItem';
import { Link } from 'react-router-dom';
class Meetups extends Component {
  constructor() {
    super();
    this.state = {
      meetups: []
    }
  }

  componentWillMount() {
    this.getMeetups();
  }
  getMeetups() {
    axios.get('http://localhost:3000/api/meetups')
      .then(response => {
        this.setState({ meetups: response.data }, () => {
          //console.log(this.state);
        })
      })
      .catch(err => console.log("error"));
  }
  render() {
    const meetupItems = this.state.meetups.map((meetup, i) => {
      return (
        <MeetupItem key={meetup.id} item={meetup} />
      )
    })
    return (
      <div>
        <br />
        <Link to="/projects" className="btn grey">Back</Link>
        <h3>Tasks</h3>
        <ul className="collection">
          {meetupItems}
        </ul>
        <div className="fixed-action-btn">
          <Link to="/meetups/add" className="btn-floating btn-large red">
            <i className="fa fa-plus"></i></Link>
        </div>
      </div>
    )
  }
}

export default Meetups;