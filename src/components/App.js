import React, { useEffect, useState } from "react";
import Initial from "./Initial";
import Card from "./Card";
import Nav from "./Nav";
function App() {
  const [data, setData] = useState({
    page: "",
    per_page: "",
    total: "",
    total_pages: "",
    data: [],
    support: {
      url: "",
      text: ""
    }
  });
  const [reqCall, setReqCall] = useState(false);
  useEffect(() => {
    if (reqCall) {
      fetch("https://reqres.in/api/users?page=1")
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    }
  });

  //console.log(data.support.url);
  return (
    <div>
      <Nav />
      {reqCall ? null : (
        <Initial key="1" reqCall={reqCall} setReqCall={setReqCall} />
      )}
      {data.data.map((x) => {
        return (
          <Card
            key={x.index}
            fname={x.first_name}
            lname={x.last_name}
            avatar={x.avatar}
            email={x.email}
          />
        );
      })}
    </div>
  );
}
export default App;
