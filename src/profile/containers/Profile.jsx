import React from 'react'
import { connect } from 'react-redux'


class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1> Profile Page </h1>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispachToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispachToProps)(Profile)