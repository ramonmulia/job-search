import React, { Component } from 'react';
import { JobList } from './JobList';
import { loadJobs } from './request';

export class JobBoard extends Component {

  state = {
    jobs: []
  }

  async componentDidMount() {
    this.setState({ jobs: await loadJobs() });
  }

  render() {
    return (
      <div>
        <h1 className="title">Job Board</h1>
        <JobList jobs={this.state.jobs} />
      </div>
    );
  }
}
