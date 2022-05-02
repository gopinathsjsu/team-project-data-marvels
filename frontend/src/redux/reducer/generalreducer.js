import { generalstate } from '../gvariables'

const GenralReducer = (state = generalstate, action) => {
    switch (action.type) {
        case 'SET_USERDATA':
            state = {
                ...state,
                profile: action
            }
            break
        case 'SET_ROLE':
            state = {
                ...state,
                role: action
            }
            break
        case 'SET_HOTEL':
            state = {
                ...state,
                hotel: action.data
            }
            break
        case 'SET_DATE':
            state = {
                ...state,
                date: action.data
            }
            break
        default:
            state = { ...state }
    }

    return state
}

export default GenralReducer