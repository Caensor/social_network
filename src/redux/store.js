
let store = {
  _state: {

    profilePage: {
      posts: [
        {
          id: 1,
          postCont: "L'Grille... what da fuck is this?!",
          likes: "3"
        },

        {
          id: 2,
          postCont: "Do'h",
          likes: "5"
        },

        {
          id: 3,
          postCont: "Dooooooh",
          likes: "1"
        }],
      textValue: ""
    },

    dialogsPage: {
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
  },

  getState() { return this._state },

  Rerender() { },

  _storeRender(rend) {
    this.Rerender = rend;
  },

  dispatch(action) {
    if (action.type === "ADD-NEW-POST") {
      this._state.profilePage.posts.push({
        id: 4,
        postCont: this._state.profilePage.textValue,
        likes: "3"
      })
      this._state.profilePage.textValue = "";
      this.Rerender();
    }

    else if (action.type === "UPDATE-TEXT") {
      this._state.profilePage.textValue = action.text;
      this.Rerender();
    }

    else if (action.type === "ADD-NEW-MESSAGE") {
      let newMessage = { id: 5, message: this._state.dialogsPage.newMessageText };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this.Rerender();
    }

    else if (action.type === "CHANGING-VALUE"){
      this._state.dialogsPage.newMessageText = action.text;
    this.Rerender();
    }
  }
}


export const addNewPostActionCreator = () =>( {type: "ADD-NEW-POST"});
export const updateTextActionCreator = (text) =>( {type: "UPDATE-TEXT", text: text});

export const changingValueActionCreator = (text) =>({type:"CHANGING-VALUE", text: text});
export const addNewMessageActionCreator = () =>({type:"ADD-NEW-MESSAGE"});

export default store;