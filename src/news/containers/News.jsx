import React from 'react'
import { connect } from 'react-redux'


class News extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1> News Page </h1>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispachToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispachToProps)(News)