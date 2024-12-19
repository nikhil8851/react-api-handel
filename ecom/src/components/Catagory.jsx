import React from "react";

export default function Category({ getCategory ,setcatname }) {
  // Check if getCategory is an array and map over it
  const dd = getCategory.map((item, index) => {
    return (
      <li onClick={() => setcatname(item.name)} key={index} className="bg-[#F2F2F2] p-[10px] rounded-[5px] cursor-pointer font-serif font-[500] mb-2">
      {item.name}
      {/* {console.log(item.name)} */}
      </li>
    );
  })  // Return empty array if getCategory is not an array

  return (
    <div>
      <h3 className="text-[25px] font-[500] p-[10px]">Category</h3>
      <ul className="flex flex-col gap-[10px]">
        {dd}
      </ul>
    </div>
  );
}
