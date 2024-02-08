import { Footer } from "../components/Footer";
import { Header } from "../components/header";
import { ContainerServiceCard } from "../components/ContainerServiceCard";

export function Services() {
  return (
    <div className="">
      <Header />
      <div className="mt-[45%] md:mt-[10%]">
        <div className=" ">
          <ContainerServiceCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}
