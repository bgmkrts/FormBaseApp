import React, { useState } from "react";
import AddressComponent from "./AdressComponent";
import TCComponent from "./TCComponent";

const FormComponent = () => {
  const [tcKimlik, setTcKimlik] = useState("");
  const [address, setAddress] = useState({
    cadde: "",
    sokak: "",
    ilce: "",
    il: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      tcKimlik,
      address,
    };
    console.log("Form verisi: ", JSON.stringify(formData));
    alert("Form başarıyla gönderildi!\n\n" + JSON.stringify(formData));
  };

  const handleClear = () => {
    setTcKimlik("");
    setAddress({ cadde: "", sokak: "", ilce: "", il: "" });
  };

  const formContainerStyle = {
    width: "100%",
    maxWidth: "900px",
    margin: "30px auto",
    padding: "40px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    fontSize: "14px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    position: "relative",
  };

  const addressContainerStyle = { 
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const addressTitleStyle = {
    marginBottom: "15px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  };

  const buttonsStyle = {
    display: "flex",
    gap: "10px",
    justifyContent: "flex-end",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#45a049",
  };
  

  return (
    <div style={formContainerStyle}>
      <form className="form">
        <TCComponent
          value={tcKimlik}
          onChange={(e) => setTcKimlik(e.target.value)}
        />
        <div style={addressContainerStyle}>
          <div style={addressTitleStyle}>Adres Bilgileri</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            <AddressComponent
              label="Cadde"
              value={address.cadde}
              onChange={(e) =>
                setAddress({ ...address, cadde: e.target.value })
              }
            />
            <AddressComponent
              label="Sokak"
              value={address.sokak}
              onChange={(e) =>
                setAddress({ ...address, sokak: e.target.value })
              }
            />
            <AddressComponent
              label="İlçe"
              value={address.ilce}
              onChange={(e) => setAddress({ ...address, ilce: e.target.value })}
            />
            <AddressComponent
              label="İl"
              value={address.il}
              onChange={(e) => setAddress({ ...address, il: e.target.value })}
            />
          </div>
        </div>
        <div style={buttonsStyle}>
          <button
            type="button"
            onClick={handleClear}
            style={{ ...buttonStyle, backgroundColor: "red" }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = buttonStyle.backgroundColor)
            }
          >
            Temizle
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            style={{ ...buttonStyle }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor =
                buttonHoverStyle.backgroundColor)
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = buttonStyle.backgroundColor)
            }
          >
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
