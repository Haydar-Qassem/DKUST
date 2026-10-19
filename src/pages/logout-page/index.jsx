import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/auth/authSlice";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="container mt-5 text-center">
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button
        onClick={() => {
          dispatch(logout());
          navigate("/");
        }}
      >
        Log out
      </button>
      <button onClick={() => navigate(-1)}>Cancel</button>
    </div>
  );
}

export default Logout;
