import React from 'react'
import { connect } from 'react-redux'
import { ScheduleComponent, Day, Week, TimelineViews, Month, 
         ViewsDirective, ViewDirective, Inject, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { loadActivities, deleteActivity, createActivity, updateActivity } from '../actions'
import { Container } from 'react-bootstrap'
import ActivityForm from '../components/ActivityForm'
import { mapSchedulerEventToActivity, mapActivitesForScheduler } from '../../shared/helpers'
import { getHospitalsActionCreator } from '../../admin/actions/adminActionCreator'

class Calendar extends React.Component {

    componentDidMount() {
        this.props.loadActivities()
        this.props.getHospitals(this.props.city)
    }

    createActivity(event) {
        let activity = mapSchedulerEventToActivity(event, this.props.hospitals)
        this.props.createActivity(activity)
    }

    updateActivity(event) {
        let activity = mapSchedulerEventToActivity(event, this.props.hospitals)
        this.props.updateActivity(activity)
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

    editorTemplate(props) {
        return <ActivityForm 
            properties={props} 
            city={this.props.city}
            hospitals={this.props.hospitals} />
    }

    // shouldComponentUpdate(nextProps) {
    //     if (this.props.activities.length == nextProps.activities.length) { 
    //         return false
    //     } 
    //     return true
    // }

    render() {
        let { isAdmin } = this.props
        let readOnly = isAdmin ? false : true
        return (
            <Container>
                <ScheduleComponent
                    width='100%'
                    height='100%'
                    startHour={"07:00"}
                    readonly={readOnly}
                    selectedDate={Date.now()}
                    showQuickInfo={true}
                    editorTemplate={this.editorTemplate.bind(this)}
                    eventSettings={{ dataSource: this.props.activities, fields: this.fields }}
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

const mapStateToProps = state => ({
    activities: mapActivitesForScheduler(state.calendar.activities, state.user.city, state.adminReducer.hospitals),
    isFetching: state.calendar.isFetching,
    isAdmin: state.user.isAdmin,
    city: state.user.city,
    hospitals: state.adminReducer.hospitals
})

const mapDispachToProps = dispatch => ({
    getHospitals: city => dispatch(getHospitalsActionCreator(city)),
    loadActivities: () => dispatch(loadActivities()),
    createActivity: activity => dispatch(createActivity(activity)),
    updateActivity: activity => dispatch(updateActivity(activity)),
    deleteActivity: id => dispatch(deleteActivity(id))
})

export default connect(mapStateToProps, mapDispachToProps)(Calendar)