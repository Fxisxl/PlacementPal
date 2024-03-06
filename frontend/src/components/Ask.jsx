import { Link, useNavigate } from "react-router-dom";

export default function Calender() {
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogOut = () => {
    // Remove token
    localStorage.removeItem("token");

    // Redirect to login pahe
    navigate("/login");
  };

  if (!!isLoggedIn) {
  }
  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>Navigate Links</h1>
          <p>This is Ask Page</p>
          <button>
            <Link to="/">Home</Link>
          </button>
          <button>
            <Link to="/companies">Companies</Link>
          </button>
          <button>
            <Link to="/resources">Resources</Link>
          </button>
          <button>
            <Link to="/calendar">Calendar</Link>
          </button>
          <button>
            <Link to="/ask">ASK</Link>
          </button>
          <button onClick={handleLogOut}>
            <Link to="/">Logout</Link>
          </button>
        </div>
      ) : (
        <div>
          <h1>You are not logged in</h1>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>
      )}
    </>
  );
}
