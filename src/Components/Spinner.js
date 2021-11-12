import React from 'react'
import '../styles/spinner.css'
function Spinner() {
    return (
       <div className="outer_loader_wrapper">
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
       </div>
    )
}

export default Spinner
