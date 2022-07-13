import React from "react";
import { Button, Card } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import "./not-found.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <Card elevation={2}>
        <h2>404 Not Found</h2>
        <Link to="/">
          <Button intent="primary" large>
            Go to main page
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default NotFound;
