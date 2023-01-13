import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function Navbar({ navbarTitles }) {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [searchInput, setSearchInput] = React.useState("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = () => {
    navigate(`/userFavorites`);
  };
  const handleOpenMenuPage = (e) => {
    const routeName = e.target.innerText.toLowerCase().split(" ")[0];
    navigate(`/${routeName}`);
  };

  const handleOnChangeInputSearchBar = (e) => {
    setSearchInput(e.target.value);
  };

  const handleOnClickButtonSearchBar = (e) => {
    const encoded = encodeURI(searchInput);
    navigate(`/search/moviesTv?str=${encoded}`);
    setSearchInput("");
  };

  const handleKeyPressInputSearchBar = (e) => {
    if (e.code === "Enter") {
      const encoded = encodeURI(searchInput);
      navigate(`/search/moviesTv?str=${encoded}`);
      window.location.reload();
      setSearchInput("");
    }
  };

  return (
    <AppBar position="relative" sx={{ backgroundColor: "#273088" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalMoviesIcon sx={{ fontSize: "2.125rem", mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: 24,
            }}
          >
            TMDB
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleOpenMenuPage}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navbarTitles.map((page) => (
                <MenuItem key={page} onClick={handleOpenMenuPage}>
                  <Typography textAlign="center" sx={{ fontSize: 16 }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navbarTitles.map((page) => (
              <Button
                key={page}
                onClick={handleOpenMenuPage}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box display="flex">
            <Search>
              <IconButton
                onClick={handleOnClickButtonSearchBar}
                sx={{
                  stroke: "white",
                  color: "white",
                  strokeWidth: "1",
                  pr: 0,
                  display: { xs: "none", md: "inline" },
                }}
              >
                <SearchIcon />
              </IconButton>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleOnChangeInputSearchBar}
                onKeyDown={handleKeyPressInputSearchBar}
                value={searchInput}
              />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" sx={{ bgcolor: "#27265B" }}>
                  U
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
