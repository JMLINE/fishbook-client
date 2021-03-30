import React, { useState, useEffect } from "react";
import SiteBar from "./home/Navbar";
import Auth from "./auth/Auth";
import FishIndex from "./Fishies/FishIndex";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);
  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(newToken);
  };
  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <FishIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div>
      <SiteBar token={sessionToken} clickLogout={clearToken} />
      {protectedViews()}

      {/* <StickyFooter  /> */}
      {/* <Auth updateToken={updateToken}/> */}
    </div>
  );
}

export default App;
