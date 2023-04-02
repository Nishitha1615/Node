
import './App.css';
import {Routes,Route, useNavigate,} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";
import { Home } from './Home';
import { Increment } from './Increment';
const data={n:"nishitha",
a:1,
func:function(){return(this.a)++
}}
function App() {
  const navigatepage=useNavigate();
  return (
    <div className="App">

<AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={()=> navigatepage("/home")}>Home</Button>
        <Button color="inherit" onClick={()=> navigatepage("/home/increment")}>Increment</Button>
      </Toolbar>
    </AppBar>
      <Routes>
        <Route path="/home" element={<Home newdata={data} />} /> Home
        <Route path="/home/increment" element={<Increment newdata={data} />} /> Increment
      </Routes>
    </div>
  );
}

export default App;
