import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import alanBtn from '@alan-ai/alan-sdk-web';
import Navbar from "./components/Navbar";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import Donation from "./pages/Donation";
import Explore from "./pages/Explore";
// import Fundraiser from "./pages/Fundraiser";
import Fund from "./pages/Fund";
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  useEffect(() => {
    alanBtn({
        key: 'bf4c1b1180ae874ed3fba8d1d6d10fda2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: (commandData) => {
          if (commandData.command === 'go:back') {
            // Call the client code that will react to the received command
          }
        }
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<LoginSignup />} />
            {/* <Route path="/Fundraiser" element={<Fundraiser />} /> */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/fund" element={<Fund />} />
          </Routes>
          <Footer />
          
        </div>
      </Router>
    </ApolloProvider>
  );
}