import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  return (
    <>
      <h2>Thanks for your details:-</h2>
      <h3>{location?.state?.name}</h3>
      <h3>{location?.state?.email}</h3>
      <h3>{location?.state?.password}</h3>

      <button onClick={() => navigate("/")}>Back</button>
    </>
  );
};

export default Detail;
