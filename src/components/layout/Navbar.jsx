import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

function Navbar({title}) {
return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
            <div className="container mx-auto">
                    <div className="flex-none px-2 mx-2 text-white "> {/* flex-none means that this div will not grow or shrink */}
                            <Link to = '/' className='text-lg font-bold align-middle flex items-center'> {/* Added flex and items-center to center align the title */}
                                    <FaGithub className="text-3xl pr-2 inline" />
                                    {title}
                            </Link>
                    </div>
                    <div className="flex-1 px-2 mx-2"> {/* flex-1 means that this div will take up the remaining space of the main axis */}
                            <div className="flex justify-end">
                                    <Link to='/' className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
                                    <Link to='/about' className='btn btn-ghost btn-sm rounded-btn'>About</Link>
                            </div>
                    </div>
            </div>
    </nav>
)
}

Navbar.defaultProps = {
    title: 'Github Finder',
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Navbar