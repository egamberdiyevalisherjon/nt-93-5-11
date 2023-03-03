import React from "react";

const Home = () => {
  function handleAdd() {
    import("../utils/add").then((file) => {
      let add = file.default;

      let result = add(4, 5);

      alert(result);
    });
  }

  return (
    <div>
      Home <button onClick={handleAdd}>bos</button>{" "}
    </div>
  );
};

export default Home;
