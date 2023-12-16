import React from "react";
import "./Code.css"; // Make sure to create or adjust your CSS file accordingly

const Code = ({ code }) => {
  return (
    <div className="code-container col-lg-6 col-md-4 col-sm-2 mx-auto">
      <div className="code-header">Ancient Script</div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default Code;
