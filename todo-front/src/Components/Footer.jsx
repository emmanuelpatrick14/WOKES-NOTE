import React from 'react'

function Footer() {
  return (
    <div>
        <footer style={{padding:'50px'}}>
            <hr />
            <p>&copy; {new Date().getFullYear()} Your website name</p>
            <hr />
        </footer>
    </div>
  )
}

export default Footer