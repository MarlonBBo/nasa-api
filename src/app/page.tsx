'use client'

import api from "@/services/api";


export default function Home() {
  
    api('https://api.nasa.gov/planetary/apod');

  return (
    <div className="">
      <h1>Hello, World!</h1>
      
    </div>
  );
}
