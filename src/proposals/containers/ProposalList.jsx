import React from 'react'
import { Container } from 'react-bootstrap'

export default class ProposalsList extends React.Component {
    componentDidMount() {

    }

    render() {
        let { day } = this.props
        return (
            <Container fluid>
                <ul className="proposals-list">
                    <li> {day} </li>
                </ul>
            </Container>
        )
        
    }
}