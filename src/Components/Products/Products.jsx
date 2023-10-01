import { useLoaderData, } from "react-router-dom";
import ShowProduct from "../ShowProduct/ShowProduct";

const Products = () => {

    const sunglasses = useLoaderData();
    return (
        <>
            <img src="https://i.ibb.co/4Fm9MgB/image.png" alt="" />

            <ShowProduct name={'Featured Products'} sunglasses={sunglasses} />
        </>
    );
};

export default Products;