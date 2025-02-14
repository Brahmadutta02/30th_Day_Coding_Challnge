import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [openMenu, setOpenMenu] = useState(false);
  
  const menuOptions = [
    { text: "Home", icon: <HomeIcon /> },
    { text: "About", icon: <InfoIcon /> },
    { text: "Testimonials", icon: <CommentRoundedIcon /> },
    { text: "Contact", icon: <PhoneRoundedIcon /> },
    { text: "Cart", icon: <ShoppingCartRoundedIcon /> },
    { text: "Login", icon: <ShoppingCartRoundedIcon /> }
  ];

  return (
    <nav>
      {/* <div className="nav-logo-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Testimonials</a>
        <a href="">Contact</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Bookings Now</button>

        {isAuthenticated ? (
          <div className="navbar-profile">
            <img src={user.picture} alt={user.name} className="profile-pic" />
            <span>{user.name}</span>
            <button className="logout-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
  Log Out
</button>

          </div>
        ) : (
          <button onClick={() => loginWithRedirect()} class="login-button">Log In</button>
        )}
      </div> */}
      <div className="navbar-links-container">
        
  <a href="">Home</a>
  <a href="">About</a>
  <a href="">Contact</a>
  
  <button className="primary-button">Bookings Now</button>

  <div className="auth-buttons">
    {isAuthenticated ? (
      <div className="navbar-profile">
        <img src={user.picture} alt={user.name} className="profile-pic" />
        <span>{user.name}</span>
        <button className="logout-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
          Log Out
        </button>
      </div>
    ) : (
      <button onClick={() => loginWithRedirect()} className="login-button">
        Log In
      </button>
    )}
  </div>
  
</div>



      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
