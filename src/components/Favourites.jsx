import { useSelector } from "react-redux";
import Job from "./Job";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  return (
    <>
      <h1 className="display-4">Prefer</h1>
      {favourites.map((jobData) => (
        <Job key={jobData._id} data={jobData} />
      ))}
    </>
  );
};
export default Favourites;
