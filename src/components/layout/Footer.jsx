import React from 'react'

function Footer() {
    const footerYear = new Date().getFullYear()
  return (
    <footer className='footer p-8 bg-gray-700 text-white footer-center '>
        <div>
            <p> Copyright &copy; {footerYear} Github Finder</p>
        </div>
    </footer>
  )
}

export default Footer