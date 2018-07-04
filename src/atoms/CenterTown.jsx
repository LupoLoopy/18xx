import React from "react";
import { colors } from "../data";

const CenterTown = ({ border }) => {
  if (border) {
    return (
      <circle fill={colors["border"]} stroke="none" cx="0" cy="0" r="15" />
    );
  } else {
    return <circle fill={colors["track"]} stroke="none" cx="0" cy="0" r="12" />;
  }
};

export default CenterTown;