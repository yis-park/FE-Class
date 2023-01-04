import React, { useState } from "react";
import Ex3Name from "./Ex3Name";
import Ex3Com from "./Ex3Com";
import Ex3Like from "./Ex3Like";

function Ex3props(props) {
  const [name, setName] = useState("");
  const [companion, setCom] = useState("");

  function getName(e) {
    const { value } = e.target;
    setName(value);
  }
  function getCom(e) {
    const { value } = e.target;
    setCom(value);
  }

  return (
    <div>
      <Ex3Name name={name} getName={getName} />
      <br />
      <Ex3Com name={companion} getCom={getCom} />
      <hr />
      <Ex3Like name={name} companion={companion} />
    </div>
  );
}

export default Ex3props;
