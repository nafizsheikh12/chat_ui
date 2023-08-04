import React from "react";

const TextInput = ({ placeholder }) => {
  return (
    <div className="mb-5 flex flex-col gap-1">
      <input
        type="text"
        className="rounded-[10px] border-[1px] border-[#C9C9C9] px-4 py-3"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
