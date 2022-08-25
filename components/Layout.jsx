import Dock from "./Dock.jsx";
import Window from "./Window.jsx";
const Layout = ({ children }) => {
  return (
    <div>
      <Dock />
      <Window />
      {children}
    </div>
  );
};

export default Layout;
