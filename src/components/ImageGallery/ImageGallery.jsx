import { forwardRef } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = forwardRef(({ images, onImageClick }, ref) => {
  return (
    <ul ref={ref} className={css.galleryList}>
      {images.map((image) => (
        <li key={image.id} className={css.galleryItem}>
          <ImageCard
            src={image.urls.small}
            onClick={() => onImageClick(image.urls.regular)}
          />
        </li>
      ))}
    </ul>
  );
});
ImageGallery.displayName = "ImageGallery";
export default ImageGallery;
