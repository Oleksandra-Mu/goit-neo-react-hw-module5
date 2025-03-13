import Button from "@mui/material/Button";
import css from "./Button.module.css";

const Buttons = ({ tag, onClick, type = "button" }) => {
  return (
    <div className={css.btn}>
      <Button
        sx={{
          color: "white",
          borderColor: "rgb(45, 56, 182)",
          backgroundColor: "rgb(45, 56, 182)",
          textTransform: "none",
          margin: "0px auto",
          "&:hover": {
            backgroundColor: "rgb(64, 79, 248)",
            borderColor: "rgb(64, 79, 248)",
          },
        }}
        type={type}
        variant="outlined"
        onClick={onClick}
      >
        {tag}
      </Button>
    </div>
  );
};

export default Buttons;
