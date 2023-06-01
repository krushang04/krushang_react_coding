import React from "react";
import classes from "./ProfileCard.module.css";

const ProfileCard = (props) => {
  const full_name = props.data.first_name + " " + props.data.last_name;
  return (
    <>
      <div className={classes.cover}>
        <div className={classes.field}>
          {<img src={props.data.avatar}></img>}
        </div>
        <div className={classes.field}>{props.data.id}</div>
        <div className={classes.field}>{full_name} </div>
        <div className={classes.field}>{props.data.email}</div>
      </div>
    </>
  );
};

export default ProfileCard;
