import React, {useState} from 'react'
//import styled from 'styled-components';
//import ReactDOM, { render } from 'react-dom';

// const Container = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// height: 100vh;
// `;

// const Button = styled.button`
// min-width: 100px;
// padding: 16px 32px;
// border-radius: 4px;
// border: none;
// background: #141414;
// color: #fff;
// font-size: 24px;
// cursor: pointer;
// `;



const Modal= () => {
const [showModal, setShowModal] = useState(false);

const openModal = () => {
setShowModal((prev) => !prev);
};

return (
        <div>
          <h1>TestShouldNotBeHere</h1>
        <button onClick={openModal}>Buy Now</button>
        <Modal showModal={showModal} setShowModal={setShowModal}/>
        </div>
  );
}

export default Modal;
