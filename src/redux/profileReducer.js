const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_TEXT = "UPDATE_TEXT";

const profileReducer = (state, action) =>{
    switch (action.type) {
    
    case ADD_NEW_POST:
        {state.posts.push({
        id: 4,
        postCont: state.textValue,
        likes: "3"
        });
        state.textValue = "";
        return state
       
        }

    case UPDATE_TEXT: {
        state.textValue = action.text;
        return state;
     }
    default: return state; 
    }
}

export default profileReducer;

export const addNewPostActionCreator = () =>( {type: ADD_NEW_POST});
export const updateTextActionCreator = (text) =>( {type: UPDATE_TEXT, text: text});