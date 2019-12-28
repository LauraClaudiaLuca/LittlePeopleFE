import React from 'react'
import { connect } from 'react-redux'


class Calendar extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <h1> Calendar Page </h1>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispachToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispachToProps)(Calendar)