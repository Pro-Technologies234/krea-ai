import { Features } from "@/components/home/features";
import { ModelCarousel } from "@/components/home/models";
import { Navbar } from "@/components/shared/navbar";

export default function Home() {
  return (
    <div className="px-1" >
      <Navbar/>
      <ModelCarousel/>
      <Features/>
    </div>
  );
}
