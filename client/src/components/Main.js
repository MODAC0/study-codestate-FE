import { useLocation, Navigate } from 'react-router-dom';
import './Main.css';

const RequireAuth = ({ isLogin, children }) => {
  let location = useLocation();

  if (!isLogin) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

const Main = ({ isLogin, logout }) => {
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    logout();
  };

  return (
    <RequireAuth isLogin={isLogin}>
      <div className="main-container">
        <button type="submit" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </RequireAuth>
  );
};

export default Main;
