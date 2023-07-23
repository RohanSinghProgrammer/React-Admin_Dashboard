import SingleItemPage from "../components/SingleItemPage";
import { singleProduct } from "../helpers/SingleItem";

const SingleProductPage = () => {
  return <SingleItemPage {...singleProduct} />;
};

export default SingleProductPage;
