import React, { useState, useEffect } from 'react';
import LayoutAdmin from './LayoutAdmin';
import { db } from '../../firebase/configFirebase';

const Ejemplo = () => {

  const [order, listOrder] = useState([]);

  useEffect(() => {
    const d = db.collection('orders').where('status', '==', 'pending');
    console.log(d); 
    return d.onSnapshot(snapshot => {
      const spellsData = []
      snapshot.forEach(doc => spellsData.push({ ...doc.data(), id: doc.id }));
      listOrder(spellsData);
    });
  }, []);

  return (
    <div className='container'>
      <div className='container-kitchen'>
        {order.map((orders) => (
          <LayoutAdmin
            key={orders.id}
            orders={orders}
            order={order}
            listOrder={listOrder}
          />))}
      </div>
    </div>
  );
}

export default Ejemplo;