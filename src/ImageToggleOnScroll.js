import { useRef, useState, useEffect } from "react";

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imgRef = useRef(null);

  const [inView, setInView] = useState(false);

  const isInView = () => {
    const rect = imgRef.current.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  useEffect(() => {
    setInView(isInView());
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    setInView(isInView());
  };

  return <img ref={imgRef} src={inView ? secondaryImg : primaryImg} alt="" />;
};

export default ImageToggleOnScroll;
