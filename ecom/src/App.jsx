import React, { useEffect } from 'react'
import { useState} from 'react'
import axios from 'axios'
import './App.css'

import Catagory from './components/Catagory'


function App() {
let [getCategory, setgetCategory] = useState([]);
let [finalproduct, setfinalproduct]= useState([]);
let [catname, setcatname] = useState("");

useEffect(() => {
  if(catname!== ""){
    axios.get(`https://dummyjson.com/products/category/${catname}`)
    .then(res => res.data)
    .then((FinalRes)=>{
      console.log(FinalRes);
      setfinalproduct(FinalRes.products);
    })
  }
},[catname])
  
let getproduct = () => {
  axios.get(`https://dummyjson.com/products`)
  .then(res => res.data)
  .then((FinalRes)=>{
    console.log(FinalRes);
    setfinalproduct(FinalRes.products);
  });
}


let  Getdata  = () => {
  axios.get('https://dummyjson.com/products/categories')
  .then(res => res.data)
  .then((FinalRes)=>{
    setgetCategory(FinalRes);
  });
}

useEffect(() => {
  Getdata();
  getproduct();
}, []);

let fp = finalproduct.map((item, index) => {  
  // console.log(item);
  return(
    <ProductItemm  key={index} pdata={item} />
  )
})

  return (
   <>
 <div className='py-[40px]'>
  <div className='max-w-[1200px] mx-auto'>
  <h1 className='text-center text-3xl font-bold mb-10'>Our Products</h1>
    <div className='grid grid-cols-[30%_auto] gap-2'>
      <div className='bg-white rounded-lg shadow-md p-4'>
 
          
          <Catagory  getCategory={getCategory}  setcatname={setcatname} />
         

      </div>
      
      <div className='bg-white rounded-lg shadow-md p-4'>Itemes

      <div className='grid grid-cols-3 gap-3 mt-4'>
          {finalproduct.length >=1?
            
            fp
            :
            "no product found"}

      </div>
      </div>
    </div>
  </div>
 </div>

   </>
  )
}

export default App





function ProductItemm({ pdata }) {
  return (
    <div className="bg-gray-200 rounded-lg shadow-md p-4 text-center">
      <img
        src={pdata.images || "https://via.placeholder.com/150"}  // Assuming image is available in pdata
        alt={pdata.title}
        className="w-[100%] h-220px object-cover rounded-md"
      />
      <h5 className="text-sm font-bold mt-4">{pdata.title}</h5>
      <p className="text-gray-500">{pdata.price}</p>
    </div>
  );
}
//   fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

// fetch('https://dummyjson.com/products/categories')
// .then(res => res.json())
// .then(console.log);

// fetch('https://dummyjson.com/products/category/smartphones')
// .then(res => res.json())
// .then(console.log);