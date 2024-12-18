import React from "react";

const TCComponent = ({ value, onChange }) => {
  const inputStyle = {
    width: "50%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  };

  return (
    <div>
      <h2>TC Bilgileri:</h2>
      <input
        type="text"
        value={value}
        onChange={onChange}
        maxLength={11}
        placeholder="TC Kimlik No"
        style={inputStyle}
      />
    </div>
  );
};

export default TCComponent;
