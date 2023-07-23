import SingleItemPage from "../components/SingleItemPage";
import { singleUser } from "../helpers/SingleItem";

const SingleUserPage = () => {
  return <SingleItemPage {...singleUser} />;
};

export default SingleUserPage;
