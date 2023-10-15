import React, { useState } from "react";
import "./Gallery.css";
import Modal from "./Modal";

function Gallery() {
  const data = [
    {
      text: "Photo by Dannie Jing on Unsplash",
      link: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      text: "Photo by Mojtaba Ravanbakhsh on Unsplash",
      link: "https://images.unsplash.com/photo-1576266394503-4999348b5447?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    },
    {
      text: "Photo by MF Evelyn on Unsplash",
      link: "https://images.unsplash.com/photo-1547296017-978c31e1c124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      text: "Photo by Eric Park on Unsplash",
      link: "https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      text: "Photo by Eric Park on Unsplash",
      link: "https://images.unsplash.com/photo-1507643179773-3e975d7ac515?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      text: "Photo by MF Evelyn on Unsplash",
      link: "https://images.unsplash.com/photo-1547296017-978c31e1c124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item.link);
  };

  const slideShowRight = () => {
    const totalItems = data.length;
    if (currentIndex + 1 >= totalItems) {
      setCurrentIndex(0);
      const newUrl = data[0].link;
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].link;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  const slideShowLeft = () => {
    const totalItems = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalItems - 1);
      const newUrl = data[totalItems - 1].link;
      setClickedImage(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImage(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {" "}
      <h2>Click on the image for enlarged view and Navigation!</h2>
      <div className="Wrapper">
        {data.map((item, index) => (
          <div key={index} className="Wrapper-images">
            <img
              src={item.link}
              alt={item.text}
              onClick={() => handleClick(item, index)}
            />
            <h3>{item.text}</h3>
          </div>
        ))}
        {clickedImage && (
          <Modal
            clickedImage={clickedImage}
            slideShowRight={slideShowRight}
            slideShowLeft={slideShowLeft}
            setClickedImage={setClickedImage}
          />
        )}
      </div>
    </>
  );
}

export default Gallery;
