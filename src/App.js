import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
// import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import SideNavbar from "./scenes/global/SideNavbar";


function App() {
  const [theme, colorMode] = useMode();
  
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <SideNavbar />
        <main className="content">
          <Topbar />
          <Dashboard />
          {/* <Routes>
            <Route path = "/" element = {<Dashboard/>} />
          </Routes> */}
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
