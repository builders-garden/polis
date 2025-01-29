import React, { useReducer } from "react";

import { Grid, Row } from "./Battleground";

import Tile from "./Tile";

export const constants = {
  MAX_ROW: 1,
  MAX_COLUMN: 1,
};

function Scene() {
  return (
    <Grid>
      {Array(constants.MAX_ROW)
        .fill("r")
        .map((_, rIndex) => (
          <Row key={rIndex}>
            {Array(constants.MAX_COLUMN)
              .fill("t")
              .map((_, tIndex) => (
                <Tile key={tIndex} />
              ))}
          </Row>
        ))}
    </Grid>
  );
}

export default Scene;
