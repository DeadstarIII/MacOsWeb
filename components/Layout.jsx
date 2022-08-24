import Dock from "./Dock.jsx";
const Layout = ({ children }) => {
  return (
    <div>
      <ComingSoon />
      {children}
    </div>
  );
};

export default Layout;
