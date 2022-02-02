import React from "react";
import Button from "@material-ui/core/Button";
function Initial(props) {
  function handleClick() {
    console.log("i got clicked");
    props.setReqCall(true);
  }
  return (
    <div className="initial">
      <h1>Click Here To Get All Users</h1>
      <Button
        variant="contained"
        style={{ backgroundColor: "#454545", color: "white" }}
        onClick={handleClick}
      >
        Get User
      </Button>
    </div>
  );
}
export default Initial;
