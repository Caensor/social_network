import Rerender from "./../index";

let store = 
    {profilePage: {
        posts:[
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
            }
        ],
        textValue:"",

        updateText : (text) =>{
          store.profilePage.textValue = (text);
          console.log(store.profilePage.textValue);
          Rerender();},
        
        addNewPost : ()  =>{
          console.log("addNewPost");
          store.profilePage.posts.push({
            id: 4,
            postCont: store.profilePage.textValue,
            likes: "3"
        })
        store.profilePage.textValue = "";
        Rerender();
        }
        
        
    },
    dialogsPage : {
        dialogItem :[ {
          id:1,
          name: "Marge"
        },
        {
          id:2,
          name: "Moe"
        },
        {
          id:1,
          name: "Bart"
        },
        {
          id:1,
          name: "Flanders"
        }
      ],
      messages : [
        {id:1, message:"Гомерe, де ти?"},
        {id:2, message:"Я у Мо"},
        {id:3, message:"Знов загорнеш а комірець..??"},
        {id:4, message:"Мардж, не починай"}
    ]
      }
}


export default store;