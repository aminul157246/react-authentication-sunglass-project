import { useLoaderData } from "react-router-dom";
import Banner from "./Banner"
import About from "../About/About";
import ShowProduct from "../../ShowProduct/ShowProduct";

const Home = () => {
    const sunglasses = useLoaderData();
    return (
        <>
            <Banner />
            <ShowProduct name={'Top rated'} sunglasses={sunglasses.slice(5, 10)} />
            <ShowProduct name={'Best sellers'} sunglasses={sunglasses.slice(0, 5)} />
            <About />
        </>
    );
};

export default Home;