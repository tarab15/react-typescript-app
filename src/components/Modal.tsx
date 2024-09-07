import React, { ReactNode } from "react";

interface Props {
  isshow: boolean;
  onButtonClick: () => void;
  onButtonClose: () => void;
}

const Modal = ({ isshow, onButtonClick, onButtonClose }: Props) => {
  console.log(isshow);
  if (!isshow) {
    return null;
  }
  return (
    <div
      onClick={onButtonClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          height: 150,
          width: 300,
          margin: "auto",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
        }}
      >
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>WARNING</h1>
          </div>
          <p>This is a Modal!</p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onButtonClose}
            style={{ float: "right" }}
          >
            OK
          </button>
        </>
      </div>
    </div>
  );
};

export default Modal;
