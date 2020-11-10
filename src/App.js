import {
  AppBar,
  Button,
  Toolbar,
  Grid,
  Container,
  Paper,
} from "@material-ui/core";
import tee from "./img/classic-tee.jpg";
import { useState } from "react";

function App() {
  const [size, setSize] = useState("");
  const [show, setShow] = useState(false);

  return (
    <Container>
      <AppBar
        position="static"
        style={{ backgroundColor: "#F6F6F7", boxShadow: "none" }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            color="inherit"
            style={{ color: "#888888" }}
            onClick={() => setShow(!show)}
          >
            My Cart
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        {show && (
          <Paper
            elevation={0}
            style={{
              width: "200px",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              border: "1px solid #CCCCCC",
              borderRadius: "0",
            }}
          >
            <Grid container>
              <Grid item>
                <img
                  src={tee}
                  style={{
                    width: "80px",
                    margin: "10px",
                  }}
                />
              </Grid>
              <Grid item>
                <p>
                  Classic Tee
                  <br />
                  1x $75.00
                  <br />
                  Size: S
                </p>
              </Grid>
              <Grid item>
                <img
                  src={tee}
                  style={{
                    width: "80px",
                    margin: "10px",
                  }}
                />
              </Grid>
              <Grid item>
                <p>
                  Classic Tee
                  <br />
                  3x $75.00
                  <br />
                  Size: L
                </p>
              </Grid>
            </Grid>
          </Paper>
        )}
      </div>
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} sm={12}>
          <div style={{ marginTop: "50px" }}>
            <img
              src={tee}
              style={{ width: "400px", display: "block", margin: "0 auto" }}
            />
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <div style={{ marginTop: "50px", width: "80%" }}>
            <h1 style={{ color: "#222222" }}>Classic Tee</h1>
            <hr />
            <h2 style={{ color: "#222222" }}>$75.00</h2>
            <hr />
            <p style={{ color: "#888888" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
              pellentesque sapien. In sodales dolor ut ullamcorper euismod.
              Quisque egestas lectus quis tempor mollis. Aliquam nibh ipsum,
              egestas vitae nisi fringilla, venenatis venenatis quam. Donec eu
              est eu nisi scelerisque dapibus. Nulla mattis nulla at velit
              viverra, id lacinia orci faucibus.
            </p>
            <br />
            <h3 style={{ color: "#888888" }}>
              SIZE<span style={{ color: "#C90000" }}>*</span>{" "}
              <span style={{ color: "#222222" }}>{size}</span>
            </h3>
            <Button
              variant="outlined"
              style={{ marginRight: "5px", color: "#888888" }}
              onClick={() => setSize("S")}
            >
              S
            </Button>
            <Button
              variant="outlined"
              style={{ marginRight: "5px", color: "#888888" }}
              onClick={() => setSize("M")}
            >
              M
            </Button>
            <Button
              variant="outlined"
              style={{ color: "#888888" }}
              onClick={() => setSize("L")}
            >
              L
            </Button>
            <br />
            <br />
            <Button
              variant="outlined"
              style={{ color: "#222222", borderColor: "#222222" }}
            >
              ADD TO CART
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
