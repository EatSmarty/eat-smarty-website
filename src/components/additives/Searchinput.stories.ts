import type { Meta, StoryObj } from "@storybook/react";
import Searchinput from "./searchinput";

const meta = {
    title: "Searchinput",
    component: Searchinput,
    parameters: {
        layout: "centerd",
    },
    tags: ["outodocs"],
    argTypes: {

    },
} satisfies Meta<typeof Searchinput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {

};