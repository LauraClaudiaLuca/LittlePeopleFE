import React from 'react'
import { connect } from 'react-redux'


class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1> Home Page </h1>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispachToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispachToProps)(Home)