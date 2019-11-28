const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const CHANGING_VALUE = "CHANGING_VALUE";

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = { id: 5, message: state.newMessageText };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;

        case CHANGING_VALUE:
            state.newMessageText = action.text;
            return state;
        default: return state;    


    }
    return state;
}

export default dialogsReducer;

export const changingValueActionCreator = (text) => ({ type: "CHANGING_VALUE", text: text });
export const addNewMessageActionCreator = () => ({ type: "ADD_NEW_MESSAGE" });