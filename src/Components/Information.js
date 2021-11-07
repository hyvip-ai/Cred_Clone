import React from 'react'
import infoArray from '../Data/Infodata'
import classes from "./information.module.css"
import Lists from './Lists'
function Information() {
    return (
       <div className= {classes.info_bg}>
           <div className="container">
               {
                   infoArray.map((item)=>{
                    return(
                        <>
                             <h4>{item.heading}</h4>
                             <p>{item.subHeading}</p>
                             <br />
                             <br />
                        </>
                    )
                })
               }
               <Lists/>
           </div>
       </div>
    )
}

export default Information
