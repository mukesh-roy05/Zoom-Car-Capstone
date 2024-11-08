import React from "react";
const DefaultLayout = (props) => {
  return (
    <div>
      <div className="header bs1">
        <div className="d-flex justify-content-between m-2">
          <h1 className="h4">Zoom Car</h1>
          <h1 className="h5">Signin/Signup</h1>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
