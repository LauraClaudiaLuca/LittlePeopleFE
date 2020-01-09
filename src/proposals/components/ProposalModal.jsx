import React from 'react'
import { Modal } from 'react-bootstrap'
import ActivityForm from '../../calendar/components/ActivityForm'
import ProposalForm from './ProposalForm'

export default class ProposalModal extends React.Component {

    render() {
        let { show, proposal, toggle } = this.props
        return (
            <Modal 
                show={show}
                onHide={() => toggle()}>
                <Modal.Header closeButton>
                    <Modal.Title>{proposal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProposalForm 
                        proposal={proposal}
                        hospitals={[]}/>
                </Modal.Body>
            </Modal>

        )
    }
}