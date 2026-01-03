 import React from 'react'
 import {Bookmark} from 'lucide-react'
 const Cards = () => {
   return (
      <div className="card"> 
          <div>
        <div className="top">
          <img src='https://imgs.search.brave.com/19plxsRMk8NgaPW3mlogPU65bpoyD6M-C8teWSROFVw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni81OTY5LzU5Njkw/NDYucG5nP3NlbXQ9/YWlzX3doaXRlX2xh/YmVs' alt='apple'/>
          <button><Bookmark size={12}  /> Save</button>
        </div>
         
        <div className="center">
          <h3>Apple <span>5 days ago</span></h3>
          <h2> Graphic Designer</h2>
          <div className='middle'>
             <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
      </div>
        <div className="bottom">
           <div>
              <h3>$120/hr</h3>
              <p>Odisha, India</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
       
     
   )
 }
 
 export default Cards
 