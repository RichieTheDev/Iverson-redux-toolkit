import { useSelector } from "react-redux";
import { Items } from "../../Items";
import Item from "./Item";
import { Hero } from "../Hero";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Home = () => {
  return (
    <>
      <div className="sm:mx-10 mt-2 sm:mt-6 mx-4">
        <Splide
          options={{
            rewind: true,
            drag: "free",
            autoplay: true,
            type: "fade",
            pagination: true,
            arrows: true,
          }}
        >
          {Hero.map((img, id) => (
            <SplideSlide key={id}>
              <img src={img.image} className="h-96 w-full object-cover" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className="mt-10 border mx-10 shadow-xl drop-shadow-xl rounded-lg ">
        <div className="grid sm:grid-cols-3 grid-flow-row pb-10 gap-8 ">
          {Items.map((product) => {
            return <Item key={product.id} {...product} />;
          })}
        </div>
      </div>
      {/* footer */}
    </>
  );
};

export default Home;
