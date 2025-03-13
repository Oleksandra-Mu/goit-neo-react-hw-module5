import ScaleLoader from "react-spinners/ScaleLoader";
import css from "./Loader.module.css";
const Loader = ({ loading }) => {
  return (
    <div className={css.loaderContainer}>
      <ScaleLoader
        loading={loading}
        color="rgba(138, 136, 136, 1)"
        speedMultiplier={0.9}
        width={2}
        height={20}
      />
    </div>
  );
};

export default Loader;
