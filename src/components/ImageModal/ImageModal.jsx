import Modal from "react-modal";

const ImageModal = ({ isModalOpen, closeModal, selectedImage }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={{
        content: {
          margin: "auto",
          width: "80%",
          height: "80%",
          border: "1px solid rgba(64, 79, 248, 0.25)",
          overflow: "hidden",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(64, 79, 248, 0.25)",
        },
      }}
    >
      {selectedImage && <img src={selectedImage} alt="Selected" />}
    </Modal>
  );
};

export default ImageModal;
