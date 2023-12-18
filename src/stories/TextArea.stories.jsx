import React from "react";
import { TextArea } from "components";

export default {
  title: "foods_design/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = { placeholder: "placeholder" };
