import Dock from "./Dock/Dock.jsx";
import ControlButtons from "./ControlButtons/ControlButtons.jsx";
const Layout = ({ children }) => {
  return (
    <div>
      <Dock />
      <ControlButtons />
      {children}
    </div>
  );
};

export default Layout;
