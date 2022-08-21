import ComingSoon from "./ComingSoon.jsx";
const Layout = ({ children }) => {
  return (
    <div>
      <Titlebar />
      {children}
    </div>
  );
};

export default Layout;
