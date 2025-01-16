
import api from "@/services/api";
import { Data } from "@/Types/Data";
import Image from "next/image";



export default async function Home() {
  const response = await api('https://api.nasa.gov/planetary/apod');
  const data: Data = await response.json()
  

  return (
    <div className="">
      <div>
        <Image src={data.url} alt="img nasa" width={800} height={800}/>
        <h1>{data.title}</h1>
        <h3>{data.date}</h3>
      </div>
      <p>{data.explanation}</p>
      
    </div>
  );
}
