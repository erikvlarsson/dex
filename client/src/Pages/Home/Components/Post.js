import React from "react";
import { weekdays, months } from "../../../Global/Constants";
import { FaEllipsisH } from "react-icons/fa";

export default function Post({ data, deletePost }) {
  const postDate = data.date;
  // RIGHT NOW
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  const dayDiff = day - postDate.day;

  let dateString = "";

  if (year === postDate.year && month === postDate.month && dayDiff <= 1) {
    const hours = d.getHours();
    const hourDiff = hours - postDate.hours;
    if (dayDiff === 0 || (dayDiff === 1 && postDate.hours < 24 - hours)) {
      const minutes = d.getMinutes();
      if (hourDiff < 1 || (hourDiff === 1 && postDate.hours > 24 - hours)) {
        const minuteDiff = minutes - postDate.minutes;
        if (hourDiff === 0 && minuteDiff < 2) {
          dateString = "Now";
        } else {
          dateString = `${minuteDiff} min`;
        }
      } else {
        dateString = `${hourDiff} h`;
      }
    } else if (dayDiff === 1) {
      dateString = `Yesterday ${postDate.hours}:${postDate.minutes}`;
    }
  } else {
    dateString = `${weekdays[postDate.weekday]}, ${postDate.day}
          ${months[postDate.month]} ${postDate.hours}:${postDate.minutes}`;
  }

  return (
    <div style={{ border: "1px solid grey", margin: "10px 0", padding: 10 }}>
      <div style={{ fontSize: "14px", color: "grey", display: "flex" }}>
        <div style={{ flex: 1 }}>{dateString}</div>
        <FaEllipsisH onClick={() => deletePost(data._id)} />
      </div>
      <div style={{ fontSize: "20px", padding: "10px 0 15px 0" }}>
        {data.content}
      </div>
    </div>
  );
}
