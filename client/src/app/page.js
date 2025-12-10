import Image from "next/image";
import  NavOne  from "@/part/home/nav/navOne";
import  NavTwo  from "@/part/home/nav/NavTwo";
import NavThree from "@/part/home/nav/NavThree";
export default function Home() {
  return (
    <div>
      <main>
       <section className="w-screen  text-black h-screen bg-emerald-50">
         <NavOne />
          <NavTwo />
           <NavThree />
        hello





     
       </section>
      
      </main>
    </div>
  );
}
