import React from "react";


const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-16 h-16 border-4 border-red-400 border-double rounded-full animate-spin"
        ></div>
      </div>
    </div>
  );
};

export default Loading;
