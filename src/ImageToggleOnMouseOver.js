import { useRef } from "react";

const ImageToggleOnMouseOver = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);

  return (
    <div>
      <img
        ref={imageRef}
        onMouseOver={() => (imageRef.current.src = secondaryImg)}
        onMouseOut={() => (imageRef.current.src = primaryImg)}
        src={primaryImg}
        alt=""
      />
    </div>
  );
};

export default ImageToggleOnMouseOver;
