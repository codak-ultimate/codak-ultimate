import { ServiceCard } from "./ServiceCard";
const data=[
    {
        Id:1,
        text:"Fried Chicken",
        image:"/pngwing.com (3).png",
        description:"The best wonderfull Fried Chiken",
        prize:3.00
    },{
        Id:2,
        text:"Burgers",
        image:"/pngwing.com (4).png",
        description:"The favorite of youth",
        prize:5.00
    },{
        Id:3,
        text:"French Fries",
        image:"/pngwing.com (5).png",
        description:"The taste for your pleasure",
        prize:2.00
    }
]

export function ContainerServiceCard() {
  return <div className="w-xl mt-[-30px] flex flex-col md:flex-row items-center gap-5 min-h-[500px] justify-around">
  <ServiceCard {...data[0]}/>
  <ServiceCard {...data[1]}/>
  <ServiceCard {...data[2]}/>
  </div>;
}
