import React from 'react'
import Proposal from './Proposal'
import { Container } from 'react-bootstrap'

export default class ProposalsList extends React.Component {
    constructor(props) {
        super(props)
        this.days = {
            'Sunday': 0,
            'Monday': 1,
            'Tuesday': 2,
            'Wednesday': 3,
            'Thursday': 4,
            'Friday': 5,
            'Saturday': 6
        }
    }

    filterProposals() {
        let { day, proposals } = this.props
        return proposals.filter(proposal => {
            let proposalDate = new Date(proposal.startDateAndTime)
            return this.days[day] === proposalDate.getDay()
        })
    }

    render() {
        let proposals = this.filterProposals()
        return (
            <Container fluid>
                <ul className="proposals-list">
                    { proposals.map(proposal => 
                        <Proposal key={proposal.id} proposal={proposal} />
                    )}
                </ul>
            </Container>
        )
        
    }
}