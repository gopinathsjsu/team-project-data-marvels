// import generalstate from '../gvariable';
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

        default:
            state = { ...state }
    }

    return state
}

export default GenralReducer