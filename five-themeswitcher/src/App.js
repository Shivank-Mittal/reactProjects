import React, { useState } from 'react';
import ThemeContext from "./context/ThemContext"
import Header from "./components/Header";
import HerosSection from "./components/HerosSection";

const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <HerosSection />
      </div>
    </ThemeContext.Provider>
  )
}


export default App;
