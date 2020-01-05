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
          }
        ]
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

    render() {
      let reports = this.activities.map(activity => this.activityComponent(activity))
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
        </React.Fragment>
      )
    }
}

const mapStateToProps = state => ({

})

const mapDispachToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispachToProps)(News)
