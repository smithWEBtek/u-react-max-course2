import React, { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Modal from '../src/components/UI/Modal/Modal';

function App() {

  const [modalState, setModalState] = useState(false);

  const handleModalButtonClick = () => {
    console.log('modalState: ', modalState)
    let oldState = modalState
    setModalState(!oldState)
  };

  const closeModal = () => setModalState(false);

  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
      <button onClick={handleModalButtonClick}>Show modal</button>
      <Modal
        title="My New Modal"
        show={modalState}
        closeModal={closeModal}>
        <h2>The body of the modal</h2>
        <p>This is the meat of the modal, the stuff, the goods.</p>
      </Modal>
    </Fragment>
  );
}

export default App;
