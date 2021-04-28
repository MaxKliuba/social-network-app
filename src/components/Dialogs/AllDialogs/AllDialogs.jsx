import React from "react";
import styles from "./AllDialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";

function AllDialogs(props) {
  let dialogsElements = props.dialogsItems.map((el) => {
    return (
      <DialogsItem
        key={el.dialogId}
        dialogId={el.dialogId}
        friendId={el.friendId}
        friendName={el.friendName}
        friendAvatar={el.friendAvatar}
        lastMessage={el.lastMessage}
      />
    );
  });

  return <div className="content_box">{dialogsElements}</div>;
}

export default AllDialogs;
