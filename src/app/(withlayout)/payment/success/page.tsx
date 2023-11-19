import React from "react";

const Success = () => {
  const gifUrl =
    "https://cdn.dribbble.com/users/4358240/screenshots/14825308/media/84f51703b2bfc69f7e8bb066897e26e0.gif";

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", 
  };

  const imgStyle = {
    maxWidth: "100%", 
  };

  return (
    <div style={containerStyle}>
      <img src={gifUrl} alt="Success GIF" style={imgStyle} />
    </div>
  );
};

export default Success;
