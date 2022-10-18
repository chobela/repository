import "./App.css";
import React, { Children } from "react";
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Households from "./pages/households";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import AppContext from "./context/appContext";
import Household from "./pages/household";
import Vcas from "./pages/vcas";
import Myfiles from "./pages/myfiles";

function App() {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const fetcher2 = (url2) => axios.get(url2).then((res2) => res2.data);

  // const { data: householData, error: householdError } = useSWR(
  //   "http://localhost:5000/households",
  //   fetcher
  // );
  // const { data: childrenData, error: childrenError } = useSWR(
  //   "http://localhost:5000/child",
  //   fetcher2
  // );

  return (
    <BrowserRouter>
      <AppContext.Provider
      // value={{
      //   data: householData
      // }}
      >
        <Sidebar />
        <div className="main-panel">
          <Navbar />
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <Routes>
                    <Route path="/" element={<Myfiles />} />
                    <Route path="/households" element={<Households />} />
                    <Route path="/children" element={<Vcas />} />
                    <Route path="/household/:id" element={<Household />} />
                    {/* <Route path="/product/:id" element={<ProductScreen/>}/> */}
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
