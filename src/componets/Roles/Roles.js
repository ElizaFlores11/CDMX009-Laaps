import React, {useState, useEffect, Fragment} from 'react'; 
import {db} from '../../firebase/configFirebase'; 
import LayoutAdmin from './LayoutAdmin'; 
//require("firebase/auth");
//const db = firebase.firestore();
const Roles = () =>{
    

    //let singUser = firebase.auth().currentUser;
    //let uid = singUser.uid;
    //const datos = db.collection('users').where('uid', '==', uid);
     //console.log(datos.perfil);    
     const [admin, infoAdmin] = useState([]);
     
     useEffect(() => {
       const d = db.collection('users');
       console.log(d); 
       return d.onSnapshot(snapshot => {
         const spellsData = []
         snapshot.forEach(doc => spellsData.push({ ...doc.data(), id: doc.id }));
        infoAdmin(spellsData);
       });
     }, []);
    return (
        <Fragment >
        {admin.map((admins) => (
            <LayoutAdmin
            key={admins.id}
            admin={admin}
            admins={admins}
            infoAdmin={infoAdmin}
             />
            ))}
            </Fragment>
       
    ); 
}
export default Roles; 
