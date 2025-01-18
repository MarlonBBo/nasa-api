
import api from "@/services/api";
import { Data } from "@/Types/Data";
import Image from "next/image";



export default async function Home() {
  const response = await api('https://api.nasa.gov/planetary/apod');
  const data: Data = await response.json()
  

  return (
    <div className="flex flex-col items-end">
      <div className="flex flex-col bg-slate-400 w-1/2 items-end pt-20 p-10">
        <Image src={data.url} alt="img nasa" width={800} height={800}
          className="rounded-2xl"
        />
        <h1>{data.title}</h1>
        <h3>{data.date}</h3>
      </div>
      <p>{data.explanation}</p>
      
    </div>
  );
}
