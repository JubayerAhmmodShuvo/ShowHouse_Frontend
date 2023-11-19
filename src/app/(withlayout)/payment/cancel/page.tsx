import React from "react";

const Cancel = () => {
  const gifUrl =
    "https://lh6.googleusercontent.com/EQCuVGODKjgdlZoSamog6tZpmMVOukADkBNeH1ixeJZcGdql-8BFUIvXirCM7LfPlr2eyyosXd16Zis__M7nxkrMsaw2WMsrKSqJ5u8MKGI-JA-NUK495_7mA_GyuK-cNRKo0T6O";

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
      <img src={gifUrl} alt="Cancel GIF" style={imgStyle} />
    </div>
  );
};

export default Cancel;
