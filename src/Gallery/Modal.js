import "./Modal.css";

const Modal = ({
  clickedImage,
  slideShowRight,
  slideShowLeft,
  setClickedImage,
}) => {
  const handleModal = (event) => {
    if (event.target.classList.contains("Close")) {
      setClickedImage(null);
    }
  };

  return (
    <>
      <div className="Modal Close" onClick={handleModal}>
        <img src={clickedImage} alt="Enlarged" />
        <span className="Close" onClick={handleModal}>
          X
        </span>
        <div onClick={slideShowLeft} className="Modal-Left-Arrow">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
        </div>
        <div onClick={slideShowRight} className="Modal-Right-Arrow">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
