import { useState } from "react";
import Cards from "./Cards";
const data = [
  {
    id: 1,
    category: "breakfast",
    img: "https://react-vite-projects-5-menu.netlify.app/images/item-1.jpeg",
    tittle: "Buttermilk Pancakes",
    cost: 15.99,
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 2,
    category: "breakfast",
    img: "https://react-vite-projects-5-menu.netlify.app/images/item-4.jpeg",
    tittle: "Country Delight",
    cost: 20.99,
    desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
  },
  {
    id: 3,
    category: "breakfast",
    img: "https://react-vite-projects-5-menu.netlify.app/images/item-7.jpeg",
    tittle: "Bacon Overflow",
    cost: 8.99,
    desc: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    id: 4,
    category: "lunch",
    img: "https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg",
    tittle: "Diner Double",
    cost: 13.99,
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 5,
    category: "lunch",
    img: "https://react-vite-projects-5-menu.netlify.app/images/item-5.jpeg",
    tittle: "Diner Double",
    cost: 12.99,
    desc: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 6,
    category: "lunch",
    img: "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg",
    tittle: "American Classic",
    cost: 22.99,
    desc: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    id: 7,
    category: "shakes",
    img: "https://react-vite-projects-5-menu.netlify.app/images/item-8.jpeg",
    tittle: "Buttermilk Pancakes",
    cost: 13.99,
    desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
  },
  {
    id: 8,
    category: "shakes",
    img: "https://react-vite-projects-5-menu.netlify.app/images/item-2.jpeg",
    tittle: "Diner Double",
    cost: 22.99,
    desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 9,
    category: "shakes",
    img: "https://react-vite-projects-5-menu.netlify.app/images/item-3.jpeg",
    tittle: "Godzilla Milkshake",
    cost: 6.99,
    desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
];
const [infor, setInfor] = useState(data);

const setInformation = (category: string) => {
  setInfor(data.filter((card) => card.category === category));
};
const findAll = () => {
  setInfor(data);
};
function App() {
  return (
    <>
      <h1 className=" w-full text-[40px] font-medium mt-10 text-center ">
        Our Menu
      </h1>
      <div className="w-full  flex justify-center space-x-8 mt-5">
        <button
          onClick={findAll}
          className="outline-none border-none  bg-[#f59e0b] py-1 px-5 rounded-md text-white"
        >
          All
        </button>
        <button
          onClick={() => setInformation("breakfast")}
          className="outline-none border-none bg-[#f59e0b]  py-1 px-5 rounded-md text-white"
        >
          Breakfast
        </button>
        <button
          onClick={() => setInformation("lunch")}
          className="outline-none border-none bg-[#f59e0b]  py-1 px-5 rounded-md text-white"
        >
          Lunch
        </button>
        <button
          onClick={() => setInformation("shakes")}
          className="outline-none border-none bg-[#f59e0b]  py-1 px-5 rounded-md text-white"
        >
          Shakes
        </button>
      </div>
      <Cards Cards={infor} />
    </>
  );
}

export default App;
