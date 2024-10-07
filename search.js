import React, { useState, useEffect, useRef } from "react";
import logoImage from "./2.png";
import "./Header.css";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { Link, useSearchParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import defaultImage from "../assest/user.png";

export default function Header({ backgroundColor, isLoggedIn }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const searchContainerRef = useRef(null);

  const toggleSignUpForm = () => {
    setShowSignUp(!showSignUp);
    setShowLogin(false);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const toggleLoginForm = () => {
    setShowLogin(!showLogin);
    setShowSignUp(false);
  };

 const fetchData = async (queryParams = {}) => {
   try {
     const url = new URL(http://25.18.182.182:3000/api/v1/restaurants/search);
     url.searchParams.append("name", searchTerm);
     url.searchParams.append("fields", "name");

     for (const key in queryParams) {
       url.searchParams.append(key, queryParams[key]);
     }

     const response = await fetch(url);
     if (!response.ok) {
       throw new Error("Failed to fetch restaurants");
     }
     const data = await response.json();
     setSearchResults(data);
     console.log(data);
     //return data;
   } catch (error) {
     console.error("Error fetching restaurants:", error);
     return [];
   }
 };

  // Fetch all data once when the component mounts
  useEffect(() => {
    fetchData().then(setSearchResults);
  }, []);

  // Update search results based on searchTerm
  useEffect(() => {
    if (searchTerm) {
      fetchData({ name: searchTerm }).then((data) => {
        const filteredResults = data.filter((restaurant) => {
          const matchesCategory = restaurant.categories.some((category) =>
            category.toLowerCase().includes(searchTerm.toLowerCase())
          );

          const matchesName = restaurant.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

          return matchesCategory || matchesName;
        });
        setSearchResults(filteredResults);
      });
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setIsSearchActive(true);
  };

  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setIsSearchActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      style={{
        backgroundImage: `url(${backgroundColor}) `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <header className="header">
        <div className="logo-container">
          <img className="logo" src={logoImage} alt="Logo" />
        </div>{" "}
        <div className="search-container" ref={searchContainerRef}>
          <div className="search-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for restaurant"
              className="search-input"
              value={searchTerm}
              onChange={handleSearch}
            />{" "}
          </div>{" "}
          {isSearchActive && searchResults.length > 0 && (
            <div className="search-results">
              {" "}
              {searchResults.map((restaurant) => (
                <div key={restaurant.id} className="search-result">
                  <Link
                    to={/resProfile/${restaurant.id}}
                    className="restaurant-link"
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    {restaurant.name}{" "}
                  </Link>{" "}
                </div>
              ))}{" "}
            </div>
          )}{" "}
        </div>{" "}
        <nav className="nav-links">
          <Link to="/" className="nav-link">
            Home{" "}
          </Link>{" "}
          <Link to="/collections" className="nav-link">
            Collections{" "}
          </Link>{" "}
          <Link to="/userProfile" className="nav-link">
            Activity{" "}
          </Link>{" "}
        </nav>{" "}
        <div
          className="action-buttons"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {" "}
          {isLoggedIn ? (
            <Link to="/userProfile" className="profile-link">
              <div className="imgP">
                <img
                  style={{
                    width: "80px",
                    height: "80px",
                    position: "relative",
                    right: "50px",
                    top: "40px",
                  }}
                  src={defaultImage}
                  alt=""
                />
              </div>{" "}
            </Link>
          ) : (
            <>
              <button className="button-L" onClick={toggleLoginForm}>
                Login{" "}
              </button>{" "}
              <button className="button-R" onClick={toggleSignUpForm}>
                Sign up{" "}
              </button>{" "}
            </>
          )}{" "}
        </div>{" "}
      
      {showSignUp && (
        <SignUpForm
          toggleLoginForm={toggleLoginForm}
          handleCloseSignUp={handleCloseSignUp}
        />
      )}{" "}
      {showLogin && (
        <LoginForm
          toggleSignUpForm={toggleSignUpForm}
          handleCloseSignUp={handleCloseLogin}
        />
      )}{" "}
    
  );
}