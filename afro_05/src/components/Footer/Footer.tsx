import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear().toLocaleString()

  return (
    <footer>
      <div className="footer__container">
        <p className="copyright">
          Todos os direitos reservados © {currentYear} - AfroTour
        </p>
        <div>
          <span className="ig"></span>
          <span className="yt"></span>
          <span className="fb"></span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
