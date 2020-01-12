import React from 'react'
import ProposalModal from '../components/ProposalModal'
import { Card, Row, Col } from 'react-bootstrap'
import { FaEdit, FaTrash, FaThumbsUp, FaCheck } from 'react-icons/fa'
import { connect } from 'react-redux'
import  { deleteProposal, updateProposal } from '../actions'
import { convertDateToString } from '../../shared/helpers'

class Proposal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
        this.updateProposal = this.updateProposal.bind(this)
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    deleteProposal() {
        this.props.deleteProposal(this.props.proposal.id)
    }

    updateProposal(proposal) {
        console.log(proposal)
        proposal.startDateAndTime = convertDateToString(proposal.startDateAndTime)
        proposal.endDateAndTime = convertDateToString(proposal.endDateAndTime)
        this.props.updateProposal(proposal)
        this.toggleModal()
    }

    likeProposal() {

    }

    acceptProposal() {

    }

    render() {
        let { proposal, isAdmin, hospitals } = this.props
        return (
            <div className="proposal">
                <ProposalModal
                    hospitals={hospitals}
                    show={this.state.showModal}
                    proposal={proposal}
                    submit={this.updateProposal}
                    toggle={() => this.toggleModal()} />

                <Card>
                    <Card.Header className="proposal-card-header">
                        <Row>
                            <Col md={8} xs={8} lg={8}>
                                <Card.Title> {proposal.title} </Card.Title>
                            </Col>

                            <Col md={4} xs={4} lg={4} style={{textAlign: 'right'}}>
                                <Card.Link href="#" onClick={() => this.toggleModal() }> <FaEdit /> </Card.Link>
                                <Card.Link href="#" onClick={() => this.deleteProposal()}> <FaTrash /> </Card.Link>
                                <Card.Link href="#"> <FaThumbsUp /> </Card.Link>
                                {isAdmin &&
                                    <Card.Link href="#"> <FaCheck /> </Card.Link>
                                }
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted"> {proposal.category} </Card.Subtitle>
                        
                        <Card.Text>
                            {proposal.description} 
                            </Card.Text>

                    </Card.Body>                  
                </Card>
            </div>          
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateProposal: proposal => dispatch(updateProposal(proposal)),
    deleteProposal: proposalId => dispatch(deleteProposal(proposalId))
})

export default connect(null, mapDispatchToProps)(Proposal)