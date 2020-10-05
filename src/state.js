const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
    _state: {
        post: [
            {name: 'Elena', text: 'Hi, how are u?'},
            {name: 'Nast', text: 'Good, and u?'},
            {name: 'Elena', text: 'I\'m fine :)'}
        ],
        newPost: {newPostName: 'Ekaterina', newPostText: 'Тестовое задание'}

    },
    getState() {
        return this._state
    },
    _callSubscribger() {
    },
    subscriber(observer) {
        this._callSubscribger = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                name: action.newName,
                text: action.newText
            }
            this._state.post.push(newPost)
            this._callSubscribger(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            let newPostSym = {
                newPostName: action.newNameSymbol,
                newPostText: action.newTextSymbol
            }
            this._state.newPost = newPostSym
            this._callSubscribger(this._state)
        }
    }
}

export const AddPostActionCreator = (newName, newText) => {
    return { type: ADD_POST, newName: newName, newText: newText }
}

export const updateNewPostTextActionCreator = (newNameSymbol, newTextSymbol) => {
    return { type: UPDATE_NEW_POST_TEXT, newNameSymbol: newNameSymbol, newTextSymbol: newTextSymbol }
}

export default store

