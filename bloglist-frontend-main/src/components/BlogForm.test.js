/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogForm from "./BlogForm";
import userEvent from "@testing-library/user-event";

test("<BlogForm /> updates parent state and calls onSubmit", async () => {
  // Mock function to be called to initiate user actions
  const createBlog = jest.fn();
  const user = userEvent.setup();

  const {container} = render(<BlogForm createNote={createBlog} />);

  const input = container.querySelector("#title");
  //   const sendButton = screen.getByText("save");

  //   await user.type(input, "testing a form...");
  //   await user.click(sendButton);

  //   expect(createBlog.mock.calls).toHaveLength(1);
  //   expect(createBlog.mock.calls[0][0].content).toBe("testing a form...");
});
