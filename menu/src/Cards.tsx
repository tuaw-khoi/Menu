import Card from "./Card";
type Porps = {
  Cards: {
    id: number;
    category: string;
    img: string;
    tittle: string;
    cost: number;
    desc: string;
  }[];
};

const Cards = ({ Cards }: Porps) => {


  return (
    <div className="grid grid-cols-3 place-items-center w-[70%] mt-10 mx-auto gap-x-8 gap-y-10 mb-10">
      {Cards.map((cardInfor) => (
        <Card key={cardInfor.id} inforCard={cardInfor} />
      ))}
    </div>
  );
};

export default Cards;
