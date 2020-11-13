import React from 'react'

function Footer() {
  function currentYear() {
    return (new Date()).getFullYear()
  }
  return (
    <footer className="footer">
      <p className="footer__copyright">{`\u00A9 ${currentYear()} Mesto Russia`}</p>
    </footer>
  )
}

export default Footer;