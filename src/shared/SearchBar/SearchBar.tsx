// import { useEffect, useState } from "react";
// import "./SearchBar.css";

// export function SearchBar({ setSearch }){

//     console.log(search)
    
//     return (
//         <input className="input" type="text" placeholder="Пошук продуктів..."  onChange={(event)=>{setSearch(event.target.value)}}/>
//     )
    
// }
// useEffect(() => {
//     async function fetchData(){
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         data.filter((val: { title: string; }) => {
//             if (search === "") {
//                 return val
//             } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
//                 return val
//             }
//         })
        
//     }
//     fetchData();
// },[])