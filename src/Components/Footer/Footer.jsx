import React, { useState } from 'react';
import './pixel-font.css';
import ContactModal from '../Contatti/ContactModal';

const footerStyle = {
  backgroundColor: '#019CD8',
  padding: '8px',
  color: 'white',
  position: 'relative',
};

const groupsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start', 
  gap: '45px', 
};

const groupStyle = {
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center', 
  gap: '5px',
  fontSize: '24px', 
  fontFamily: 'pixel-font',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '20px', 
  fontFamily: 'pixel-font',
};

const largerLogoStyle = {
  width: '30px',
  height: '30px',
};

const logoStyle = {
  width: '115px',
  height: '115px',
};

const whiteBackground = {
  backgroundColor: 'white', 
  padding: '8px', 
  borderRadius: '10px', 
  margin: '2px',
};

const copyrightStyle = {
  position: 'absolute', 
  bottom: '18px', 
  right: '30px', 
  fontSize: '12px', 
  fontFamily: 'pixel-font'
};

const greenTextStyle = {
  color: '#CFFF4B',
  fontSize: '24px',
  marginBottom: '20px',
  marginTop: '10px', 
};

const backgroundOverlayStyle = {
  position: 'absolute',
  top: '20px',
  left: 0,
  width: '10%',
  height: '10%',
  background: 'url("image/Group.png")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: 0.9, 
};

const backgroundOverlayStyle2 = {
  position: 'absolute',
  top: '20%',
  left: '30%',
  width: '8%',
  height: '8%',
  background: 'url("image/Group.png")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: 0.7, 
};

const backgroundOverlayStyle3 = {
  position: 'absolute',
  top: '20%',
  left: '90%',
  width: '8%',
  height: '8%',
  background: 'url("image/Group.png")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const backgroundOverlayStyle4 = {
  position: 'absolute',
  top: '60%',
  left: '65%',
  width: '8%',
  height: '8%',
  background: 'url("image/Group.png")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: 0.7, 
};

const backgroundOverlayStyle6 = {
  position: 'absolute',
  top: '17%',
  left: '57%',
  width: '8%',
  height: '8%',
  background: 'url("image/Group.png")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const backgroundOverlayStyle5 = {
  position: 'absolute',
  top: '70%',
  left: '8%',
  width: '8%',
  height: '8%',
  background: 'url("image/Group.png")', 
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: 0.7, 
};

function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };
  
  return (
    <footer style={footerStyle} className='w-full'>
      <div style={groupsContainerStyle}>
        {/* Gruppo 1 */}
        <div style={{ ...groupStyle, flex: 1, margin: '0 45px 0 0'}}>
          <p style={greenTextStyle}>Generale</p>
          <a style={linkStyle} href="#">Chi siamo</a>
          <a style={linkStyle} href="#">Centro Assistenza</a>
          <a
          style={linkStyle}
          href="#"
          onClick={openContactModal} 
        >
          Contatti
        </a>
      </div>

      <ContactModal isOpen={isContactModalOpen} toggleModal={closeContactModal} />
      

        {/* Gruppo 2 */}
        <div style={{ ...groupStyle, flex: 1, margin: '0 45px 0 0' }}>
          <p style={greenTextStyle}>Framework</p>
          <p style={{ color: 'white', fontSize: '19px' }}>Esempio</p>
          <p style={{ color: 'white', fontSize: '19px' }}>Esempio</p>
          <div>
            <img src="image/logo.png" alt="Logo" style={logoStyle} />
          </div>
        </div>

        {/* Gruppo 3 */}
        <div style={{ ...groupStyle, flex: 1, margin: '0 45px 0 0' }}>
          <p style={greenTextStyle}>Seguiteci</p>
          <div style={{ display: 'flex', gap: '4px' }}>
            <a style={{ ...linkStyle, ...whiteBackground }} href="#"><img src="image/github-logo.png" alt="GitHub Logo" style={largerLogoStyle} /></a>
            <a style={{ ...linkStyle, ...whiteBackground }} href="#"><img src="image/discord.png" alt="Discord Logo" style={largerLogoStyle} /></a>
            <a style={{ ...linkStyle, ...whiteBackground }} href="#"><img src="image/instagram.png" alt="Instagram Logo" style={largerLogoStyle} /></a>
          </div>
          <div style={{ display: 'flex', gap: '4px' }}>
            <a style={{ ...linkStyle, ...whiteBackground }} href="#"><img src="image/linkedin.png" alt="LinkedIn Logo" style={largerLogoStyle} /></a>
            <a style={{ ...linkStyle, ...whiteBackground }} href="#"><img src="image/pixil.png" alt="Pixil Logo" style={largerLogoStyle} /></a>
          </div>
        </div>
      </div>
      <div style={backgroundOverlayStyle}></div>
      <div style={backgroundOverlayStyle2}></div>
      <div style={backgroundOverlayStyle3}></div>
      <div style={backgroundOverlayStyle4}></div>
      <div style={backgroundOverlayStyle5}></div>
      <div style={backgroundOverlayStyle6}></div>
      <span style={copyrightStyle}>© 2023 Codeventure</span>
    </footer>
  );
}

export default Footer;





