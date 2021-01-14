import React from "react";
import { findByText, render, screen } from "@testing-library/react";
import ContactForm from "./ContactForm";
import userEvent from "@testing-library/user-event";
test("Form and submit test", async () => {
  //arrange
  render(<ContactForm />);

  //act
  //get inputs
  const nameInput = screen.getByLabelText(/first name/i);
  const lastnameInput = screen.getByLabelText(/last name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);

  //type values into input fields
  userEvent.type(nameInput, "Senih");
  userEvent.type(lastnameInput, "Aydin");
  userEvent.type(emailInput, "aydinsenih@gmail.com");
  userEvent.type(messageInput, "this is a message");

  // push submit
  const button = screen.getByRole("button");
  userEvent.click(button);

  //assert
  const firstName = await screen.findByText(/Senih/);
  const lastname = await screen.findByText(/Aydin/);
  const email = await screen.findByText(/aydinsenih@gmail.com/);
  const message = await screen.findByText(/This is a message/i);
  expect(firstName).toBeInTheDocument();
  expect(lastname).toBeInTheDocument();
  expect(email).toBeInTheDocument();
  expect(message).toBeInTheDocument();
});
