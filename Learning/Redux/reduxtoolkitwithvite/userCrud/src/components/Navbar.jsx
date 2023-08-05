import React from 'react'

const Navbar = () => {
  return (
    <>
        <h1>Welcome !!!</h1>

        <nav className="navbar">
            <ul>
                <li>
                    <a href = "/">Home</a>
                </li>
                <li>
                    <a href = "/">About</a>
                </li>
                <li>
                    <a href = "/">Contact Us</a>
                </li>
                <li>
                    <a href = "/">Code</a>
                </li>
                <li>
                    <a href = "/">Project</a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar