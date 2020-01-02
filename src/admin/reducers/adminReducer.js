import { GET_VOLUNTEERS_SUCCESS,GET_HOSPITALS_SUCCESS } from "../actions/adminActionTypes";

const initialState = {
    volunteers: [
        {
            id: 1,
            firstName: 'Ana',
            surName: 'Maria',
            email: 'ana@gmail.com',
            phone: '0747838457'
        },
        {
            id: 2,
            firstName: 'Elena',
            surName: 'Hasmasan',
            email: 'elena@gmail.com',
            phone: '0747838444'
        },
        {
            id: 3,
            firstName: 'Mircu',
            surName: 'Marian',
            email: 'mircu@gmail.com',
            phone: '0747838888'
        },
    ],
    hospitals: [
        {
            id: 1,
            name: "Terapia 1"
        },
        {
            id: 2,
            name: "Oncologie 2"
        },
        {
            id: 3,
            name: "Oncologie 3"
        }
    ],
}

const adminReducer = (state = initialState, action) => {
    const newState = state;
    switch (action.type) {
        case GET_HOSPITALS_SUCCESS:
            newState.hospitals = action.hospitals;
            break;
        case GET_VOLUNTEERS_SUCCESS:
            newState.volunteers = action.volunteers;
        default:
            break;
    }
    return newState;
}

export default adminReducer