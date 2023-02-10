import React from "react";

function AppHeader({liked, allPosts}) {
  return (
    <>
      <div className="app-header d-flex align-items-center justify-content-between">
        <h1>CoDeRaLi</h1>
        <h2>{allPosts} post, like {liked}</h2>
      </div>
    </>
  );
}

export default AppHeader;
