import React from 'react'
import { connect } from 'react-redux'


class News extends React.Component {
    constructor(props) {
        super(props)
        this.activities = [
          {
            description: "description1",
            category: "category1",
            title: "Activity 1",
            status: "done",
            startDateAndTime: "2020-01-05T14:00",
            endDateAndTime: "2020-01-05T16:00",
            hospital: 1,
            report: {
              description: "description1",
              category: "category1",
              title: "Report 1",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          },
          {
            description: "description2",
            category: "category2",
            title: "Activity 1",
            status: "done",
            startDateAndTime: "2020-01-05T16:00",
            endDateAndTime: "2020-01-05T18:00",
            hospital: 2,
            report: {
              description: "description2",
              category: "category2",
              title: "Report 2",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          },
          {
            description: "description1",
            category: "category1",
            title: "Activity 1",
            status: "done",
            startDateAndTime: "2020-01-05T14:00",
            endDateAndTime: "2020-01-05T16:00",
            hospital: 1,
            report: {
              description: "description1",
              category: "category1",
              title: "Report 1",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          },
          {
            description: "description2",
            category: "category2",
            title: "Activity 1",
            status: "done",
            startDateAndTime: "2020-01-05T16:00",
            endDateAndTime: "2020-01-05T18:00",
            hospital: 2,
            report: {
              description: "description2",
              category: "category2",
              title: "Report 2",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          },
          {
            description: "description1",
            category: "category1",
            title: "Activity 1",
            status: "done",
            startDateAndTime: "2020-01-05T14:00",
            endDateAndTime: "2020-01-05T16:00",
            hospital: 1,
            report: {
              description: "description1",
              category: "category1",
              title: "Report 1",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          },
          {
            description: "description2",
            category: "category2",
            title: "Activity 1",
            status: "done",
            startDateAndTime: "2020-01-05T16:00",
            endDateAndTime: "2020-01-05T18:00",
            hospital: 2,
            report: {
              description: "description2",
              category: "category2",
              title: "Report 2",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
          }
        ]
        this.state = {
          allActivities: this.activities,
          currentPage: 1,
          activitiesPerPage: 3,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }

    activityComponent(activity) {
        return (
          <div class="card" id="modified-card">
            <div class="card-header" id="modified-card-header">
              {activity.report.title}
            </div>
            <div class="card-body">
              <h5 class="card-title">Description: {activity.report.description}</h5>
              <h5 class="card-title">Volunteers: </h5>
              <h5 class="card-title">Date: {activity.startDateAndTime.substring(0, 10)}</h5>
              <h5 class="card-title">Accomplished objectives: </h5>
              <p class="card-text">{activity.report.text}</p>
              <h5 class="card-title">Filled by: </h5>
            </div>
          </div>
        )
    }

    pageNumberComponent(number) {
      return (
        <li class="page-number"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    }

    render() {
      const { allActivities, currentPage, activitiesPerPage } = this.state;
      const indexOfLastActivity = currentPage * activitiesPerPage;
      const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;
      const currentActivities = allActivities.slice(indexOfFirstActivity, indexOfLastActivity);

      let reports = currentActivities.map(activity => this.activityComponent(activity))

      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(allActivities.length / activitiesPerPage); i++) {
        pageNumbers.push(i);
      }

      const renderPageNumbers = pageNumbers.map(number => this.pageNumberComponent(number))

      return (
        <React.Fragment>
          <em>Reports</em>
          <ul class="nobullet">
            {
              reports.map((report, i) => (
                <li key={i}>
                  {report}
                </li>
              )
            )
            }
          </ul>
          <ul id="page-numbers">
            {renderPageNumbers}
          </ul>
        </React.Fragment>
      )
    }
}

const mapStateToProps = state => ({

})

const mapDispachToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispachToProps)(News)
