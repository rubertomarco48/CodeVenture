import React ,{useState} from "react";

const modalStyle = {
  fontFamily: "pixel-font",
};

const textStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  textShadow: "2px 8px 4px rgba(0, 0, 0, 0.2)",
};

const buttonStyle = {
  fontWeight: "bold",
  textShadow: "0 0 6px rgba(0, 0, 0, 0.8)",
};

const labelStyle = {
  fontSize: "14px",
  fontWeight: "bold",
};

const closeButtonStyle = {
  position: "absolute",
  left: "65%",
  top: "25%",
  color: "red",
  fontFamily: "pixel-font",
  fontSize: "24px",
  transition: "color 0.3s, transform 0.3s, text-shadow 0.3s",
  fontWeight: "bold",
  cursor: "pointer", 
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
};

function ContactModal({ isOpen, toggleModal }) {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="bg-white opacity-10 absolute inset-0"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              backgroundImage: "url(image/finestra1.png)",
              backgroundSize: "60%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              visibility: "visible",
              opacity: 1,
            }}
          ></div>

          <div className="bg-transparent absolute inset-0 flex items-center justify-center">
            <div style={modalStyle}>
            <button
            onClick={toggleModal}
            className="close-button"
            style={{
              ...closeButtonStyle,
              color: isHovered ? "red" : "inherit",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
              >
                X
              </button>

              <h2 className="text-cfff4b p-2" style={textStyle}>
                CONTACT CODEVENTURE
              </h2>

              <div className="mt-4 flex flex-col text-start">
                <label
                  htmlFor="email"
                  className="text-white pr-4 pb-2"
                  style={labelStyle}
                >
                  Email :
                </label>
                <input
                  type="email"
                  id="email"
                  className="border rounded-md p-2 w-full text-left"
                  placeholder="Inserisci la tua email"
                />
              </div>
              <div className="mt-4 flex flex-col text-start">
                <label
                  htmlFor="message"
                  className="text-white pr-4 pb-2"
                  style={labelStyle}
                >
                  Messaggio :
                </label>
                <textarea
                  id="message"
                  className="border rounded-md p-2 w-full h-20 text-left"
                  placeholder="Messaggio da inviare ..."
                />
              </div>

              <div className="mt-4 flex justify-between gap-5">
                <button
                  className="bg-white text-cfff4b px-10 py-4 rounded-md hover:bg-opacity-80"
                  style={buttonStyle}
                >
                  Indietro
                </button>

                <button
                  className="bg-cfff4b text-white px-10 py-4 rounded-md hover:bg-opacity-80"
                  style={buttonStyle}
                >
                  Inviare
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactModal;
