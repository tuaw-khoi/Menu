

type Porps = {
  inforCard: {
    id: number;
    category: string;
    img: string;
    tittle: string;
    cost: number;
    desc: string;
  };
};

const Card = ({ inforCard }: Porps) => {
  return (
    <div className="h-full shadow">
      <img
        className="w-full rounded-t-md h-[250px] object-cover block"
        src={inforCard.img}
        alt=""
      />
      <div className="px-5">
        <div className="flex justify-between mt-5 items-center">
          <h3 className="text-[22px] font-medium ">{inforCard.tittle}</h3>
          <span className="px-2 bg-yellow-500 text-white rounded-sm mr-4">
            {inforCard.cost}
          </span>
        </div>
        <p className=" py-4">{inforCard.desc}</p>
      </div>
    </div>
  );
};

export default Card;
