const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const CHANGING_VALUE = "CHANGING_VALUE";

let initialState = {
    dialogItem: [{
      id: 1,
      name: "Marge"
    },
    {
      id: 2,
      name: "Moe"
    },
    {
      id: 1,
      name: "Bart"
    },
    {
      id: 1,
      name: "Flanders"
    }
    ],
    messages: [
      { id: 1, message: "Гомерe, де ти?" },
      { id: 2, message: "Я у Мо" },
      { id: 3, message: "Знов загорнеш а комірець..??" },
      { id: 4, message: "Мардж, не починай" }
    ],
    newMessageText: ""
  }

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = { id: 5, message: state.newMessageText };
            
            return {
              ...state, messages:[...state.messages, newMessage], newMessageText:""
            };

        case CHANGING_VALUE:
            state.newMessageText = action.text;
            return {
              ...state, newMessageText: state.newMessageText
            };    
        default: return state;


    }
    return state;
}

export default dialogsReducer;

export const changingValueActionCreator = (text) => ({ type: "CHANGING_VALUE", text: text });
export const addNewMessageActionCreator = () => ({ type: "ADD_NEW_MESSAGE" });