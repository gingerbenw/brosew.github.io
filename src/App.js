import React, { Component } from "react";
import "./App.css";

// Components
import Banner from "./components/banner";
import Header from "./components/header";
import Intro from "./components/intro";
import Services from "./components/services";
import Work from "./components/work";
// import Contact from "./components/contact";
import Footer from "./components/footer";

// styling
import "bootstrap/dist/css/bootstrap.css";
import "fontawesome";

// import "./fonts/font-icon.css";

// import "./vendor/flexslider.css";
// import "./vendor/jquery.fancybox.css";
// import "./vendor/main.css";
// import "./vendor/responsive.css";
// import "./vendor/animate.min.css";
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
				<Banner />
        <Intro />
        <Services />
        <Work />
				{/* <Contact /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
