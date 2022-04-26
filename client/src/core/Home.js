import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  CardActions
 
} from "@material-ui/core";

function Home() {
  return (
    <Container>
      <Card>
        <CardContent>
            <Typography align="center" variant="h3">
               Base login application
           </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button component={Link} to="/signup" color="secondary">Register</Button>
          <Button component={Link} to="/signin" color="secondary">Log in</Button>
        </CardActions>
      </Card>    
    </Container>
  );
}

export default Home;
