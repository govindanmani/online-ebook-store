// import FoterDis from "./component/footer";
// import ReturnStart from "./component/home";
// import Day9PAH from "./component/class/Day9PAH";
// import Day9CW from "./component/class/day9CW";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/about";

import { NavBar } from "./component/navBar";
import ReturnStar from "./component/home";
import AboutAdd from "./component/about1";
import AddFunction5 from "./component/loginUi";
import AddFunction1 from "./component/registration";
import Contact from "./component/contact";
import Profile from "./component/profile";
import Terms from "./component/terms";
import MyCart from "./component/cart";
import { createContext } from "react";

// import NavBar6 from "./component/navbar2";

// import AddFunction5 from "./component/loginUi";
// import AddFunction1 from "./component/registration";
export const MyProvider = createContext();

function App() {
  const data = null;
  return (
    // <div>
        // <NavBar />
          //  <Nature />
    //     {/* <AddFunction5 /> */}
    //     {/* <AddFunction1 /> */}

              // <About />
          <>
               <MyProvider.Provider value={data}>
            <Routes>
              <Route exact path="/" element={<ReturnStar />} />
              <Route exact path="/About1" element={<AboutAdd />} />
              <Route exact path="/login" element={<AddFunction5 />} />
              <Route exact path="/registration" element={<AddFunction1 />} />
              <Route exact path="/contactUs" element={<Contact />} />
              <Route exact path="/terms" element={<Terms />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/Cart" element={<MyCart />} />
          </Routes>
          </MyProvider.Provider>
          </>
          // <Profile />
          // <Terms />
          // <Contact />
    //    {/* <FoterDis /> */}
    // </div>

    // <Day9CW />
    // <Day9PAH />
    // <Day9PAH />
  );
}

export default App;
