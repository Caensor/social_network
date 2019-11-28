import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


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
      this._state.profilePage =  profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

      this.Rerender();
  }
}



export default store;