const commentInitialState = []

const commentReducer = (state = commentInitialState, action) => {
    switch(action.type) {
        case 'SET_COMMENTS' : {
            return [].concat(action.payload)
        }
        default: {
            // return [...state]
            return [].concat(state)
        }
    }
}

export default commentReducer