import React from 'react'
import { connect } from 'react-redux'
import { ScheduleComponent, Day, Week, TimelineViews, Month, 
         ViewsDirective, ViewDirective, Inject, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { loadActivities, deleteActivity } from '../actions'
import { Container } from 'react-bootstrap'
import ActivityForm from '../components/ActivityForm'

class Calendar extends React.Component {
    
    UNSAFE_componentWillMount() {
        this.props.loadActivities()
    }

    createActivity(activity) {

    }

    updateActivity(activity) {

    }

    deleteActivity(activity) {
        this.props.deleteActivity(activity.Id)
    }

    onActionBegin(args) {
        if (args.requestType === 'eventCreate') {
            this.createActivity(args.addedRecords[0])
        } else if (args.requestType === 'eventChange') {
            this.updateActivity(args.changedRecords[0])
        } else if (args.requestType === 'eventRemove') {
            this.deleteActivity(args.deletedRecords[0])
        }
    }

    onPopupOpen(args) {
        if (args.type === 'Editor') {
            let statusElement = args.element.querySelector('#EventType');
            statusElement.setAttribute('name', 'EventType');
        }
    }


    editorTemplate(props) {
        return <ActivityForm properties={props}/>
    }

    render() {
        let { isAdmin } = this.props
        let readOnly = isAdmin ? false : true
        return (
            <Container>
                <ScheduleComponent
                    width='100%'
                    height='100%'
                    readonly={readOnly}
                    selectedDate={Date.now()}
                    editorTemplate={this.editorTemplate.bind(this)}
                    eventSettings={{ dataSource: this.props.activities, fields: this.fields }}
                    popupOpen={this.onPopupOpen.bind(this)}
                    actionBegin={this.onActionBegin.bind(this)}>

                    <ViewsDirective>
                        <ViewDirective option='Day' />
                        <ViewDirective option='Week' />
                        <ViewDirective option='TimelineWeek' />
                        <ViewDirective option='Month' />
                    </ViewsDirective>
                    <Inject services={[Day, Week, TimelineViews, Month, DragAndDrop]} />
                </ScheduleComponent>
            </Container>
        )
    }
}

const mapActivitesForScheduler = activities => {
    return activities.map(activity => {
        return {
            Id: activity.id,
            Subject: activity.title,
            Description: activity.description,
            Location: JSON.parse(localStorage.getItem('token')).city,
            EventType: activity.status,
            IsAllDay: false,
            StartTime: new Date(activity.startDateAndTime),
            EndTime: new Date(activity.endDateAndTime)
        }
    })
}

const mapStateToProps = state => ({
    activities: mapActivitesForScheduler(state.calendar.activities),
    isFetching: state.calendar.isFetching,
    isAdmin: state.user.isAdmin
})

const mapDispachToProps = dispatch => ({
    loadActivities: () => dispatch(loadActivities()),
    deleteActivity: id => dispatch(deleteActivity(id))
})

export default connect(mapStateToProps, mapDispachToProps)(Calendar)