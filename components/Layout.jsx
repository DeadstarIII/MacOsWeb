import Titlebar from "./Titlebar.jsx";
const Layout = ({ children }) => {
  return (
    <div>
      <Titlebar />
      {children}
    </div>
  );
};

export default Layout;
