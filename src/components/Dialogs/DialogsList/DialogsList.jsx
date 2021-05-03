import React from "react";
import styles from "./DialogsList.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";

function DialogsList(props) {
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

export default DialogsList;
