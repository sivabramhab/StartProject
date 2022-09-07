import "./InputExp.css";

function CardPractise(props) {
  const classes = "input_card "+props.className;
  return <div className={classes}>props.children;</div>;
}

export default CardPractise;
