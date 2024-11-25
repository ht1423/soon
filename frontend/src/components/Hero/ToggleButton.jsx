import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleHandler = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div
      className={` w-10 h-6 flex items-center p-1 rounded-full cursor-pointer transition-all duration-300 ${
        isToggled ? 'bg-purple-500' : 'bg-slate-600'
      }`}
      onClick={toggleHandler}
    >
      <div
        className={` w-4 h-4 bg-white border-2 rounded-full border-white shadow-md transform transition-transform duration-300 ${
          isToggled ? 'translate-x-4' : 'translate-x-0'
        }`}
      ></div>
    </div>
  );
};

export default ToggleButton;