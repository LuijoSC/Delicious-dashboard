import React           from 'react';
//import CardDanger      from '../components/cards/CardDanger';
import CardSuccess     from '../components/cards/CardSuccess';


const Home = () => {
  return (
    <div className="Home">
      {/* <CardDanger/> */}
      {cards.map((card, index) => {
        return (
          <CardSuccess
            title={card.title}
            desc={card.desc}
            tag={card.tag}
            key={index}
          />
        );
      })}
    </div>
  );
};

const cards = [{
  title: "",
  desc: "",
  tag: "",
}, {
  title: "",
  desc: "",
  tag: "",
}, {
  
  title: "",
  desc: "",
  tag: "",
}];

export default Home;