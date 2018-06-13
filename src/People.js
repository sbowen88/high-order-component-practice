import React, { Component } from "react";
import Loading from "./Loading";
import Collapse from "./Collapse";

function People(props) {
  let people = props.people.map((e, i) => (
    <Collapse key={i} title={e.name}>
      {styles => (
        <div style={styles}>
          <div>{e.hair_color}</div>
          <div>{e.eye_color}</div>
        </div>
      )}
    </Collapse>
  ));
  return (
    <div>
      <Loading />
      {people}
    </div>
  );
}

export default Loading(People);
