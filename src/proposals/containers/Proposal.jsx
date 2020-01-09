import React from 'react'
import ProposalModal from '../components/ProposalModal'
import { Card, ListGroup, Row, Col, Modal } from 'react-bootstrap'
import { FaEdit, FaTrash, FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

export default class Proposal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    toggleModal() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        let { proposal } = this.props
        return (
            <div className="proposal">
                <ProposalModal
                    show={this.state.showModal}
                    proposal={proposal}
                    toggle={() => this.toggleModal()} />

                <Card>
                    <Card.Header className="proposal-card-header">
                        <Row>
                            <Col md={9} xs={9} lg={9}>
                                <Card.Title> {proposal.title} </Card.Title>
                            </Col>

                            <Col md={3} xs={3} lg={3} style={{textAlign: 'right'}}>
                                <Card.Link href="#" onClick={() => this.toggleModal() }> <FaEdit /> </Card.Link>
                                <Card.Link href="#"> <FaTrash /> </Card.Link>
                                <Card.Link href="#"> <FaThumbsUp /> </Card.Link>
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