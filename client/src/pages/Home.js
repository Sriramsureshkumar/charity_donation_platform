import React from "react";

import Header from "../components/Header";

export default function Home() {
  return (
    <div
      className="home"
      style={{
        background:
          "url('https://ehr.meditech.com/themes/ehrmeditech/images/about/charitable-causes-animation.gif')",
          backgroundSize:"cover"
          
      }}
    >
      <div className="container mx-auto px-1">
        <Header />
      </div>
    </div>
  );
}
