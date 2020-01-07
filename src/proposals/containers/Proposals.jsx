import React from 'react'
import { connect } from 'react-redux'

class Proposals extends React.Component {

    render() {
        return (
            <h3> Proposals Page: A table with proposal for each day of the current week </h3>
            <h5> Users can create a proposal for a day or vote an existing one</h5>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Proposals)