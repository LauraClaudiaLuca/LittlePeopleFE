import React from 'react'
import { connect } from 'react-redux'
import { ScheduleComponent, Day, Week, TimelineViews, Month, 
         ViewsDirective, ViewDirective, Inject, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { loadActivities } from '../actions'
import { Container } from 'react-bootstrap'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

class Calendar extends React.Component {
    
    UNSAFE_componentWillMount() {
        this.props.loadActivities()
    }

    createActivity(activity) {

    }

    updateActivity(activity) {

    }

    deleteActivity(activity) {

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

    getStatus(status) {
        switch (status) {
            case 'ACCEPTED':
                return 'Accepted'
            case 'IN_PROGRESS':
                return 'In Progress'
            case 'DONE':
                return 'Done'
            case 'REJECTED':
                return 'Rejected'
            case 'PENDING':
                return 'Pending'
        }
    }

    editorTemplate(props) {
        console.log(props)
        return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }}><tbody>
            <tr><td className="e-textlabel"> <b>Title</b></td><td colSpan={4}>
                <input id="Summary" className="e-field e-input" type="text" name="Subject" style={{ width: '100%' }} />
            </td></tr>
            <tr><td className="e-textlabel"><b>Status</b></td><td colSpan={4}>
                <DropDownListComponent id="EventType" placeholder='Choose status' data-name="EventType" className="e-field" style={{ width: '100%' }} dataSource={['In Progress', 'Pending', 'Accepted', 'Done', 'Rejected']} value={this.getStatus(props.EventType) || null}></DropDownListComponent>
            </td></tr>
            <tr><td className="e-textlabel"><b>Start Time</b></td><td colSpan={4}>
                <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
            </td></tr>
            <tr><td className="e-textlabel"><b>End Time</b></td><td colSpan={4}>
                <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
            </td></tr>
            <tr><td className="e-textlabel"><b>Location</b></td><td colSpan={4}>
                <input id="Location" className="e-field e-input" type="text" name="Location" style={{ width: '100%' }} />
            </td></tr>

            <tr><td className="e-textlabel"><b>Description</b></td><td colSpan={4}>
                <textarea id="Description" className="e-field e-input" name="Description" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
            </td></tr></tbody></table> : <div></div>);
    }

    render() {
        return (
            <Container>
                <ScheduleComponent
                    width='100%'
                    height='100%'
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
    isFetching: state.calendar.isFetching
})

const mapDispachToProps = dispatch => ({
    loadActivities: () => dispatch(loadActivities())
})

export default connect(mapStateToProps, mapDispachToProps)(Calendar)