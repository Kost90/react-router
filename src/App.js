import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage";
import Userpage from "./components/pages/userpage/Userpage";
import Albomphotopage from "./components/pages/albom_photo_page/Albomphotopage";
import {DataProvider} from "./components/context/Usercontext.jsx"

function App() {
  return (
    <DataProvider>
    <div>
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="user/:id" element={<Userpage/>}/>
      <Route path="user/:id/albomphoto/:albomid" element={<Albomphotopage/>}/>
      </Routes>
    </div>
    </DataProvider>
  );
}

export default App;
