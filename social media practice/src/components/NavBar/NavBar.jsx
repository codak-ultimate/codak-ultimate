import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import PetsIcon from "@mui/icons-material/Pets";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "15px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const StyledBadge = styled(Badge)({
    maxWidth: "10px", // Ajusta el ancho máximo del badge
    minWidth: "20px", // Ajusta el ancho mínimo del badge
    padding: "0px", // Ajusta el padding interno del badge
  });

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography
          variant="h6"
          component={"h6"}
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          Code(End)
        </Typography>
        <PetsIcon
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <StyledBadge badgeContent={4} color="error">
            <MailIcon />
          </StyledBadge>
          <StyledBadge badgeContent={3} color="error">
            <Notifications />
          </StyledBadge>
        </Icons>
        <UserBox>
          <Avatar
            sx={{
              width: 30,
              height: 30,
            }}
            alt="Remy Sharp"
            src="/una-taza-de-javascript.png"
            onClick={()=>{
                setOpen(!open)
            }}
          />
          <Typography variant="span">Jhon</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
