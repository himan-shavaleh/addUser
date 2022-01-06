import Card from "../UI/Card";
import calsses from "./ErrorModal.module.css";
import Button from "../UI/Button";
const ErrorModal = (props) => {
  return (
    <>
      <Card>
        <div onClick={props.onConfirm} className={calsses.backdrop}></div>
        <div className={calsses.modal}>
          <div className={calsses.title}>{props.title}</div>
          <div calsses={calsses.modalcontent}>
            <p>{props.message}</p>
            <button type="button" onClick={props.onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};
export default ErrorModal;
