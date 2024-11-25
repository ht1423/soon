import React from 'react';

function HoveredLink({ href, children }) {
  return (
    <a
      href={href}
      className="block px-4 py-2 text-sm text-white bg-black rounded-md  hover:text-[rgb(53,205,248)] transition duration-200"
      style={{
        boxShadow: '0 2px 5px rgba(128, 128, 128, 0.4)', 
      }}
    >
      {children}
    </a>
  );
}

export default HoveredLink;
