import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import OAuth from "./pages/OAuth";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreateOffer from "./pages/CreateOffer";
import UpdateOffer from "./pages/UpdateOffer";
import Offer from "./pages/Offer";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/oauth" element={<OAuth />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/create-offer" element={<CreateOffer />} />
          <Route path="/update-offer" element={<UpdateOffer />} />
          <Route path="/offer" element={<Offer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
