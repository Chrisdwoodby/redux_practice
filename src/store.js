import { createStore, combineReducers } from "redux";


const addNewMessageActionCreator = ({ userName, text }) => ({
  type: "ADD_MESSAGE",
  payload: { userName, text }
});


const addUserActionCreator = ({ userName }) => ({ // this is an action
  //complete this action creator
  type: "ADD_USER",
  payload: { userName }
});

const defaultAppState = { userName: "", text: "" };


const messagesReducer = function(previousState = defaultAppState, action) {
  // console.log(">>> ACTION OF Type >>> new message " + action.type);
  // console.log(">>> ACTION's PAYLOAD IS >>> new message ", action.payload);
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        userName: action.payload.userName,
        text: action.payload.text
      };
    default:
      return previousState;
  }
};

const usersReducer = function(previousState = { userList: [] }, action) {
  // console.log(">>> ACTION OF Type >>> user " + action.type);
  // console.log(">>> ACTION's PAYLOAD IS >>> user ", action.payload);
  switch (action.type) {
    case "ADD_USER":
      return {
        userList: [...previousState.userList, action.payload],
      };
      /* fill me in */
    case "ADD_MESSAGE":
      return {
        userList: previousState.userList[action.payload.userName]
      }
    default:
      return previousState;
  }
};

const chatRoomReducer = function(previousState = [], action) {
  //complete this reducer function
  switch (action.type) {
    case "ADD_MESSAGE":
      return {
        previousState: action.payload
      }
    default:
      return previousState;
  }
};
const rootReducer = combineReducers({
  messages: messagesReducer,
  //add the rest of the reducers
  users: usersReducer,
  chatList: chatRoomReducer
});

const storeInitialState = {
  messages: { userName: "", text: "" },
  users: {
    userList: []
  },
    chatList: []
}

const store = createStore(rootReducer, storeInitialState);
window.__store = store;

/*
To add items to the store in the browser, write the statement below in the brower's console:
let store = window.__store
then dispatch your action creators in the console as an argument inside dispatch like so:
store.dispatch({
  type: "ADD_MESSAGE",
  payload: { userName: "Lauren", text: "Where should we go out to eat?" }
})

NOT like so:
store.dispatch(addNewMessageActionCreator({
    userName: "Lauren",
    text: "Where should we go out to eat?"
  })
);

*/

console.log("Current State before dispatching actions with action creator >>>", store.getState());

/* In messagesReducer, comment out the "case" after the switch statement
as well as the return statement right below the case.
call the dispatch function below.
Because we are not handling the action type, note that the previous state is returned.
Now let's handle that action by uncommenting the case and return statement. Note the new current state. */

store.dispatch(
  addNewMessageActionCreator({
    userName: "Lauren",
    text: "Where should we go out to eat?"
  })
);

  console.log("Current state after dispatching action with action creator >>>", store.getState());

// store.dispatch(
//   addNewMessageActionCreator({
//     userName: "Trevor",
//     text: "Anywhere, I'm SO HUNGRY!!"
//   })
// );

 store.dispatch(
  addUserActionCreator({
  userName: "Jimmy_Cliff"
   })
 );




  store.dispatch(/* dispatch more newMessageActionCreators */);
  store.dispatch(/* dispatch usersActionCreators */);

  console.log("Current state after dispatching action with action creator >>>", store.getState());

export default store;
