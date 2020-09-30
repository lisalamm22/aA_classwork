import React from "react";
import Clock from "./clock.jsx";
import Tabs from "./tabs.jsx";
import Weather from "./weather.jsx";
import Autocomplete from "./autocomplete.jsx";

const Root = () => {
  return (
    <div>
      <Clock />
      <Tabs
        tabs={[
          { title: 1, content: "I am the first" },
          { title: 2, content: "Second is best" },
          { title: 3, content: "Derek is lisa's favorite" },
        ]}
      />
      <Weather />
      <Autocomplete
        names={["Derek", "Is", "A", "Baby", "Lisa", "is", "his", "favorite"]}
      />
    </div>
  );
};

export default Root;
