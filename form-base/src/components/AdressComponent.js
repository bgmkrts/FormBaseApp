import React from "react";

const AddressComponent = ({ label, value, onChange }) => {
  return (
    <div style={{ width: "200px" }}>
      <label
        style={{ display: "block", fontSize: "12px", marginBottom: "5px" }}
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={{
          width: "90%",
          padding: "8px",
          fontSize: "14px",
          marginBottom: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
    </div>
  );
};

export default AddressComponent;
