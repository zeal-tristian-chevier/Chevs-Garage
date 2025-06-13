import React, { useState, useMemo } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Homepage from "./views/Homepage";
import Contact from "./views/Contact";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

function App() {
    const [mode, setMode] = useState("light");
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Use system preference on first load
    React.useEffect(() => {
        setMode(prefersDarkMode ? "dark" : "light");
    }, [prefersDarkMode]);

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === "light"
                        ? {
                              primary: {
                                  main: "#f5f5f5", // light gray for navbar in light mode
                              },
                          }
                        : {}),
                },
                typography: {
                    fontFamily:
                        '"Montserrat", "Helvetica", "Arial", sans-serif',
                },
            }),
        [mode]
    );

    const handleThemeChange = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static" color="primary" className="shadow-none">
                <Container maxWidth="lg" className="px-4">
                    <Toolbar
                        disableGutters
                        className="flex flex-row items-center justify-between min-h-[64px] px-0"
                    >
                        <Box className="flex items-center flex-grow min-w-0">
                            <img
                                src={require("./views/imgs/icontransparent.png")}
                                alt="Logo"
                                className="w-24 h-14 mr-2 object-contain"
                            />
                            <Typography
                                variant="h6"
                                component="div"
                                className="font-bold tracking-wide truncate"
                            >
                                Chev's Garage
                            </Typography>
                        </Box>
                        <div className="hidden md:flex items-center space-x-2">
                            <Switch
                                checked={mode === "dark"}
                                onChange={handleThemeChange}
                                color="default"
                                inputProps={{
                                    "aria-label": "toggle dark mode",
                                }}
                            />
                            <Typography variant="body2" className="mr-2">
                                {mode === "dark" ? "Dark" : "Light"} Mode
                            </Typography>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/"
                                className="font-semibold normal-case"
                            >
                                Home
                            </Button>
                            <Button
                                color="inherit"
                                component={Link}
                                to="/contact"
                                className="font-semibold normal-case"
                            >
                                Contact Us
                            </Button>
                        </div>
                        <div className="flex md:hidden items-center">
                            <Switch
                                checked={mode === "dark"}
                                onChange={handleThemeChange}
                                color="default"
                                inputProps={{
                                    "aria-label": "toggle dark mode",
                                }}
                            />
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerToggle}
                                className="ml-2"
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </Container>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                >
                    <Box
                        className="w-48"
                        role="presentation"
                        onClick={handleDrawerToggle}
                    >
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton component={Link} to="/">
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component={Link} to="/contact">
                                    <ListItemText primary="Contact Us" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem>
                                <Typography variant="body2" className="mr-2">
                                    {mode === "dark" ? "Dark" : "Light"} Mode
                                </Typography>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </AppBar>
            <Box className="min-h-[calc(100vh-64px)] bg-background-default text-text-primary py-4">
                <Routes>
                    <Route path="/" element={<Homepage theme={mode} />} />
                    <Route path="/contact" element={<Contact theme={mode} />} />
                </Routes>
            </Box>
        </ThemeProvider>
    );
}

export default App;
