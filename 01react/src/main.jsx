import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// const element = (<a href="https://zrf-me.vercel.app" target="_blank">Check Me</a>)

const anotherElement = React.createElement(
  'a',{href: 'https://zrf-me.vercel.app', target:"_blank"},"Check out"
)

ReactDOM.createRoot(document.getElementById("root")).render(

    anotherElement

);
