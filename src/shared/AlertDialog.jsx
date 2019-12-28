import React from 'react'
import { Alert } from 'react-bootstrap'

export default class AlertDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }

    closeAlert() {
        this.setState({
            visible: false
        })
    }

    autoCloseAlert() {
        setTimeout(() => {
            this.closeAlert()
        }, 3000)
    }

    render() {
        if (!this.state.visible) {
            return null
        }
        let { message, danger } = this.props
        let variant = danger === true ? "danger" : "success"
        this.autoCloseAlert()
        return (
            <Alert id="alert-dialog" variant={variant} onClose={this.closeAlert.bind(this)} dismissible>
                <p id="alert-text"> {message} </p>
            </Alert>
        )
    }

}