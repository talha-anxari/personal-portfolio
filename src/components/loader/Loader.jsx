import React from "react";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900/60 backdrop-blur-sm z-50">
      <div className="relative">
        {/* Outer rotating circle */}
        <div className="w-16 h-16 border-4 border-t-transparent border-red-700 rounded-full animate-spin"></div>

        {/* Inner rotating circle */}
        <div className="absolute top-1 left-1 w-14 h-14 border-4 border-t-transparent border-gray-400 rounded-full animate-spin-reverse"></div>

        {/* Center pulsing dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-red-700 rounded-full animate-pulse shadow-lg"></div>
        </div>
      </div>
    </div>
  );
};

const styles = `
  @keyframes spin-reverse {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  .animate-spin-reverse {
    animation: spin-reverse 1s linear infinite;
  }
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Loader;
