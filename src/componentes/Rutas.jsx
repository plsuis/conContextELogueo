import { Routes, Route } from "react-router-dom";
import Layout from "../Pages/Layout";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Logueo from "../Pages/Logueo";
import PaxinaApp0 from "../Pages/PaxinaApp0";
import NoPage from "../Pages/NoPage";

export default function Rutas(){
    return(<>
          <Routes>
              <Route path="/" element={<Layout />}>
            
                <Route index element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="logueo" element={<Logueo />} />
                <Route path="paxinaapp0" element={<PaxinaApp0 />} />
                <Route path="*" element={<NoPage />} />
              
              </Route>
          </Routes>
    </>)
}