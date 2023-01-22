import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeV1 from "./pages/home-v1";
import HomeV2 from "./pages/home-v2";
import HomeV3 from "./pages/home-v3";
import HomeV4 from "./pages/home-v4";
import HomeV5 from "./pages/home-v5";
import HomeV6 from "./pages/home-v6";
import HomeV7 from "./pages/home-v7";
import HomeV8 from "./pages/home-v8";
import HomeV9 from "./pages/home-v9";
import HomeV10 from "./pages/home-v11";

import About from "./pages/about";
import Service from "./pages/service";
import ServiceDetails from "./pages/service-details";
import Portfolio from "./pages/portfolio";
import PortfolioV2 from "./pages/portfolio-v2";
import PortfolioDetails from "./pages/portfolio-details";
import Team from "./pages/team";
import TeamDetails from "./pages/team-details";
import Faq from "./pages/faq";
import ComingSoon from "./pages/coming-soon";
import Error from "./pages/404";
import Location from "./pages/location";

import Shop from "./pages/shop";
import ShopGrid from "./pages/shop-grid";
import ProdductDetails from "./pages/product-details";
import ShopLeftSidebar from "./pages/shop-left-sidebar";
import ShopRightSidebar from "./pages/shop-right-sidebar";

import BlogGrid from "./pages/blog-grid";
import BlogLeftSidebar from "./pages/blog-left-sidebar";
import BlogRightSidebar from "./pages/blog-right-sidebar";
import Blog from "./pages/blog";

import BlogDetails from "./pages/blog-details";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import MyAccount from "./pages/my-account";
import Login from "./pages/login";
import Register from "./pages/register";
import AddListing from "./pages/add-listing";
import Wishlist from "./pages/wishlist";
import OrderTracking from "./pages/order-tracking";
import History from "./pages/history";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomeV1} />
        <Route path='/home-v2' component={HomeV2} />
        <Route path='/home-v3' component={HomeV3} />
        <Route path='/home-v4' component={HomeV4} />
        <Route path='/home-v5' component={HomeV5} />
        <Route path='/home-v6' component={HomeV6} />
        <Route path='/home-v7' component={HomeV7} />
        <Route path='/home-v8' component={HomeV8} />
        <Route path='/home-v9' component={HomeV9} />
        <Route path='/home-v10' component={HomeV10} />

        <Route path='/about' component={About} />
        <Route path='/service' component={Service} />
        <Route path='/service-details' component={ServiceDetails} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/portfolio-v2' component={PortfolioV2} />
        <Route path='/portfolio-details' component={PortfolioDetails} />
        <Route path='/team' component={Team} />
        <Route path='/team-details' component={TeamDetails} />
        <Route path='/faq' component={Faq} />
        <Route path='/coming-soon' component={ComingSoon} />
        <Route path='/404' component={Error} />
        <Route path='/location' component={Location} />
        <Route path='/shop' component={Shop} />
        <Route path='/shop-grid' component={ShopGrid} />
        <Route path='/shop-left-sidebar' component={ShopLeftSidebar} />
        <Route path='/shop-right-sidebar' component={ShopRightSidebar} />

        <Route path='/product-details' component={ProdductDetails} />
        {/* blog */}
        <Route path='/blog-grid' component={BlogGrid} />
        <Route path='/blog-left-sidebar' component={BlogLeftSidebar} />
        <Route path='/blog-right-sidebar' component={BlogRightSidebar} />
        <Route path='/blog' component={Blog} />

        <Route path='/blog-details' component={BlogDetails} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={Cart} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/my-account' component={MyAccount} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/add-listing' component={AddListing} />
        <Route path='/wishlist' component={Wishlist} />
        <Route path='/order-tracking' component={OrderTracking} />
        <Route path='/history' component={History} />
      </Switch>
    </Router>
  );
};

export default App;
