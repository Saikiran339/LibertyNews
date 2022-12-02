import * as React from "react";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import { Button, Container } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function TopMenu() {
  return (
    <Container
      style={{ backgroundColor: "blue", textAlign: "justify", height: "50px" }}
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          borderRadius: 1,
          color: "white",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <Divider
          orientation="vertical"
          // variant="middle"
          flexItem
          color="white"
        />
        <HomeIcon style={{ marginTop: "10px", color: "yellow" }} />
        <Divider
          orientation="vertical"
          // variant="middle"
          flexItem
          color="white"
        />
        <Button style={{ color: "yellow", marginTop: "6px", fontSize: "18px" }}>
          <b>ఆంధ్రప్రదేశ్</b>
        </Button>
        <Divider
          orientation="vertical"
          // variant="middle"
          flexItem
          color="white"
        />
        <Button style={{ color: "yellow", marginTop: "6px", fontSize: "18px" }}>
          <b>తెలంగాణ</b>
          </Button>
        <Divider
          orientation="vertical"
          // variant="middle"
          flexItem
          color="white"
        />
        <Button style={{ color: "yellow", marginTop: "6px", fontSize: "18px" }}>
          <b>జాతీయం</b>
          </Button>
        <Divider
          orientation="vertical"
          // variant="middle"
          flexItem
          color="white"
        />
        <Button style={{ color: "yellow", marginTop: "6px", fontSize: "18px" }}>
          <b>వీడియోలు</b>
          </Button>
        <Divider
          orientation="vertical"
          // variant="middle"
          flexItem
          color="white"
        />
      </Grid>
    </Container>
  );
}
