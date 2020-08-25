import {firebase} from './configFirebase'; 
require("firebase/auth");

const singUser = () => {
    let logedUser = firebase.auth().currentUser;
    return logedUser;
/*    if (logedUser) {
      return logedUser;
    } else {
      console.log("no existe");
    }*/
  };
export default singUser;
