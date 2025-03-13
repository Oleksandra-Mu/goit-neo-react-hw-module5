import toast from "react-hot-toast";
import SearchIcon from "@mui/icons-material/Search";
import css from "./SearchForm.module.css";
import { grey } from "@mui/material/colors";

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    if (topic.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <form className={css.formField} onSubmit={handleSubmit}>
      <button className={css.button} type="submit">
        <SearchIcon sx={{ color: grey[700] }} />
      </button>

      <input
        className={css.searchField}
        type="text"
        name="topic"
        autoComplete="off"
        autoFocus
        placeholder="Enter a film name"
      />
    </form>
  );
};

export default SearchForm;
