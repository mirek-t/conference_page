import { useRef, useState } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imgRef = useRef(null);
  const [inView, setInView] = useState(false);

  const isInView = () => {
    const rect = imgRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  return <img ref={imgRef} src={inView ? secondaryImg : primaryImg} alt="" />;
};

export default ImageToggleOnScroll;
