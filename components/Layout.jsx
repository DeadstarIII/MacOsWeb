import Dock from "./Dock/Dock.jsx";
const Layout = ({ children }) => {
  return (
    <div>
      <Dock />
      {children}
    </div>
  );
};

export default Layout;
