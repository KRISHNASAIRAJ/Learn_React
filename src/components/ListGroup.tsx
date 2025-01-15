// import { MouseEvent } from "react";

import { useState } from "react";
//Passing Data
interface Props{
    items:string[],
    heading:string,
    onSelectItem:(item:string)=>void;
}

function ListGroup({items, heading,onSelectItem}:Props) {
  
  //Hook is used to store the state of the selected index
    const [selectedIndex,setSelectedIndex] = useState(-1);
    
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No data</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={()=>{setSelectedIndex(index),onSelectItem(item)}}
          >
            {/* we just passed the reference but not called the function */}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
