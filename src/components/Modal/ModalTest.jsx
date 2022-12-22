import React, {useState} from 'react';
//import styled from 'styled-components';


const ModalTest= () => {
    const [showModal, setShowModal] = useState(false);
    
    const openModal = () => {
    setShowModal((prev) => !prev);
    };
    return (
        <div>
          <h1>TestShouldNotBeHere</h1>
        <button onClick={openModal}>Buy Now</button>
        <ModalTest showModal={showModal} setShowModal={setShowModal}/>
        </div>
  );
}

export default ModalTest;