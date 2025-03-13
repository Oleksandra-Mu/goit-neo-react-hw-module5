import css from "./ImageCard.module.css";
const ImageCard = ({ src, onClick }) => {
  return (
    <img className={css.galleryImage} src={src} alt="" onClick={onClick} />
  );
};

export default ImageCard;
