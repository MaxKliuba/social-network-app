import styles from "./AllDialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";

function AllDialogs(props) {
  let dialogsElements = props.dialogsItems.map((el) => {
    return (
      <DialogsItem
        key={el.id}
        id={el.id}
        friend_id={el.friend_id}
        friend_name={el.friend_name}
        friend_avatar={el.friend_avatar}
        last_message={el.last_message}
      />
    );
  });

  return (
    <div className="content_box">
      {dialogsElements}
    </div>
  );
}

export default AllDialogs;
