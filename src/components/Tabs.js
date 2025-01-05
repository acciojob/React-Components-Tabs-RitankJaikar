import React from "react";
import { useState } from 'react';


const Tabs = ({ tabs }) => {
    const [tabClicked, setTabClicked] = useState("");

  
    const handleTabClick = (content) => {
        setTabClicked(content);
    };
    
  
    return (
      <div>
        <ul>
          {
          tabs.map((value) => 
            <li onClick={() => handleTabClick(value.content)}>
              {value.title}
            </li>
          )
          }
        </ul>

{

         tabClicked  && <p>This is content for {tabClicked}</p>
        
}
      </div>
    );
  };
  
  export default Tabs;