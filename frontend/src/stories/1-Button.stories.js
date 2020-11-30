import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "@storybook/react/demo";
import RadarChart from "../components/Chart/RadarChart/RadarChart";

export default {
  title: "Button",
};

export const text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const radar = () => {
  return <RadarChart />;
};

export const emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
