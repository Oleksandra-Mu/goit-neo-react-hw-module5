import { useEffect, useRef, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { Toaster } from "react-hot-toast";
import Loader from "./Loader/Loader";
import { fetchImagesWithTopic } from "../images-api";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Buttons from "./Button/Button";
import ImageModal from "./ImageModal/ImageModal";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    async function fetchImages() {
      if (topic === "") return;
      try {
        setError(false);
        setLoading(true);
        const { results, total_pages } = await fetchImagesWithTopic(
          topic,
          page
        );
        setImages((prevImages) => [...prevImages, ...results]);
        setTotalPages(total_pages);
      } catch (e) {
        setError(true);
        console.error("Error fetching photos:", e);
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [topic, page]);

  const handleSearch = (newTopic) => {
    setTopic(newTopic);
    setImages([]);
    setPage(1);
    setTotalPages(1);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
    setTimeout(() => {
      if (galleryRef.current) {
        galleryRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, 1000);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} fetching={loading} />
      <Toaster />
      {loading && <Loader loading={loading} />}
      {error && <ErrorMessage />}
      {images.length === 0 && !loading && topic && (
        <p>
          We couldnt find any images for that query. Please check your spelling
          or try using different keywords.
        </p>
      )}
      {images.length > 0 && (
        <ImageGallery
          ref={galleryRef}
          images={images}
          onImageClick={openModal}
        />
      )}
      {images.length > 0 && page < totalPages && (
        <Buttons onClick={handleLoadMore} tag="Load more" />
      )}
      {!error && (
        <ImageModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
}
