import axiosInstance from "../../shared/axiosinstance"
import Swal from 'sweetalert2'

export const LOAD_PROPOSALS = 'LOAD_PROPOSALS'
export const LOAD_PROPOSALS_SUCCESS = 'LOAD_PROPOSALS_SUCCESS'
export const LOAD_PROPOSALS_FAILURE = 'LOAD_PROPOSALS_FAILURE'

export const CREATE_PROPOSAL = 'CREATE_PROPOSAL'
export const CREATE_PROPOSAL_SUCCESS = 'CREATE_PROPOSAL_SUCCESS'
export const CREATE_PROPOSAL_FAILURE = 'CREATE_PROPOSAL_FAILURE'

export const DELETE_PROPOSAL = 'DELETE_PROPOSAL'
export const DELETE_PROPOSAL_SUCCESS = 'DELETE_PROPOSAL_SUCCESS'
export const DELETE_PROPOSAL_FAILURE = 'DELETE_PROPOSAL_FAILURE'

export const UPDATE_PROPOSAL = 'UPDATE_PROPOSAL'
export const UPDATE_PROPOSAL_SUCCESS = 'UPDATE_PROPOSAL_SUCCESS'
export const UPDATE_PROPOSAL_FAILURE = 'UPDATE_PROPOSAL_FAILURE'


const loadProposalsSuccess = proposals => {
    return {
        type: LOAD_PROPOSALS_SUCCESS,
        proposals
    }
}

const loadProposalsFailure = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Could not fetch proposals from the server!',
        confirmButtonColor: '#db3d44',
        confirmButtonText: 'OK'
    })
    return {
        type: LOAD_PROPOSALS_FAILURE
    }
}

const loadProposalsRequest = () => {
    return {
        type: LOAD_PROPOSALS
    }
}

export const loadProposals = dispatch => {
    return dispatch => {
        dispatch(loadProposalsRequest())
        return axiosInstance.get(`http://localhost:8080/api/proposal/getProposalOptionalWithStatus?currentWeek=true`)
            .then(res => dispatch(loadProposalsSuccess(res.data)))
            .catch(() => dispatch(loadProposalsFailure()))
    }
}