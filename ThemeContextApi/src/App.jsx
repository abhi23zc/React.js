import React, { useState } from "react";
import { useEffect } from "react";
import useTheme from "./contextApi/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {

  const {themeMode, setthemeMode} = useTheme();

  useEffect(() => {

    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(themeMode)

  }, [themeMode])
  

  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
