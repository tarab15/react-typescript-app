import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false);

  const items = ["Karachi", "Lahore", "Multan"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleClick = () => {
    return setShowAlert(true);
  };
  const showClose = () => {
    return setShowAlert(false);
  };
  const handleModalClose = () => {
    console.log("close is pressed");
    return setShow(false);
  };
  const handleModalShow = () => {
    console.log("handle is clicked");
    return setShow(true);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {showAlert && <Alert onClose={showClose}>This is an Alert!</Alert>}
      <Button
        label="show Alert"
        color="success"
        onButtonClick={handleClick}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      />
      <Button
        label="show Modal"
        color="secondary"
        onButtonClick={handleModalShow}
      />
      <Modal
        onButtonClick={handleModalShow}
        isshow={show}
        onButtonClose={handleModalClose}
      />
    </div>
  );
}

export default App;
