export function manageFriends(state = {friends: []}, action){

    switch(action.type) {
        case "ADD_FRIEND": 
            return (
                {...state, friends: [...state.friends, action.friend] }
            ) 
        case "REMOVE_FRIEND": 
            let correctFriend = state.friends.findIndex((friend) => friend.id === action.id)
            return (
                {...state,
                    friends: [
                      ...state.friends.slice(0, correctFriend),
                      ...state.friends.slice(correctFriend + 1)
                    ]
                }
            )
        default:
            return state
    }
}