import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Box,
  Grid,
  Paper,
} from "@mui/material";

const drawerWidth = 240;

// Dummy data for social media followers
const socialMediaFollowers = [
  { platform: "YouTube", followers: 1200 },
  { platform: "Facebook", followers: 3400 },
  { platform: "TikTok", followers: 2200 },
  { platform: "X", followers: 800 },
  { platform: "Instagram", followers: 2500 },
];

const AdminPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Liwanag at Dunong Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Form Submissions" />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box p={3}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>

          {/* Page Views Section */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Page Views
                </Typography>
                <Typography variant="h2">5,432</Typography>
                <Typography variant="body1" color="text.secondary">
                  Total views in the last month
                </Typography>
              </Paper>
            </Grid>

            {/* Followers Section */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Social Media Followers
                </Typography>
                <ul>
                  {socialMediaFollowers.map((data) => (
                    <li key={data.platform}>
                      {data.platform}: {data.followers}
                    </li>
                  ))}
                </ul>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminPage;
