import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Frame from './components/Frame/Frame';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import LoginVerification from './pages/login/Login-verification';
import SignUpDetails from './pages/signup/SignUpDetails';
import PostAd from './pages/post-ad/PostAd';
import All_Ads from './pages/all_ads/All_Ads';
import Search_Ad from './pages/search_ads/Search_ad';
import User_Ad from './pages/user-ad/User_ad';
import PostAdRent from './pages/post-ad/PostAdRent';
import PostAdSell from './pages/post-ad/PostAdSell';
import MyAccount from './pages/account/MyAccount';
import MyAdvertisement from './pages/account/MyAdvertisement';
import Membership from './pages/account/Membership';
import ContactUs from './pages/contact/ContactUs';
import AboutUs from './pages/about/AboutUs';
import MemberShip from './pages/membership/MemberShipPage';
import Category from './pages/category/Category';
import EmailLogin from './pages/login/EmailLogin';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-with-email" element={<EmailLogin />} />
          <Route path="/login-verification" element={<LoginVerification />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/register-details" element={<SignUpDetails />} />
          <Route path="/post-ad" element={<PostAd />} />
          <Route path="/post-ad-rent" element={<PostAdRent />} />
          <Route path="/post-ad-sell" element={<PostAdSell />} />
          <Route path="/category" element={<Category />} />
          <Route path="/view-all-ad" element={<All_Ads />} />
          <Route path="/ads/:slug" element={<Search_Ad />} />
          <Route path="/user-ad" element={<User_Ad />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route
            path="/my-account/advertisement"
            element={<MyAdvertisement />}
          />
          <Route path="/my-account/membership" element={<Membership />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/membership" element={<MemberShip />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
