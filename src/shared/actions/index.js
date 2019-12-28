export const GET_USER_DATA = 'GET_USER_DATA'

export const getUserData = token => {
    return {
        type: GET_USER_DATA,
        token
    }
}