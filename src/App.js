import "./App.css";
import { AppBar, Button, Toolbar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid>
        <Grid item lg={6}></Grid>
        <Grid item lg={6}></Grid>
      </Grid>
    </div>
  );
}

export default App;
