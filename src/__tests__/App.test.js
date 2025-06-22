import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";
import userEvent from "@testing-library/user-event";

// Portfolio Elements
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);

  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of yourself", () => {
  render(<App />);

  const image = screen.getByAltText("My profile pic");

  expect(image).toHaveAttribute("src", "https://via.placeholder.com/350");
});

test("displays second-level heading with the text `About Me`", () => {
  render(<App />);

  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });

  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph for your biography", () => {
  render(<App />);

  const bio = screen.getByText(/lorem ipsum/i);

  expect(bio).toBeInTheDocument();
});

test("displays the correct links", () => {
  render(<App />);

  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });

  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://github.com")
  );

  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("https://linkedin.com")
  );
});

// Newsletter Form - Initial State
test("the form includes text inputs for name and email address", () => {
  // your test code here
  render(<App/>)

 expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
 expect(screen.getByLabelText(/Email/i)).toBeInTheDocument(); 

 
});

test("the form includes three checkboxes to select areas of interest", () => {
  // your test code here
  render(<App/>)

  const checkBoxes = screen.getAllByRole("checkbox");

  expect(checkBoxes).toHaveLength(3);
});

test("the checkboxes are initially unchecked", () => {
  // your test code here
  render(<App/>)
 
   expect(
    screen.getByRole("checkbox", { name:'Tech'})
  ).not.toBeChecked();
  expect(
    screen.getByRole("checkbox", { name:'Design' })
  ).not.toBeChecked();
  expect(
    screen.getByRole("checkbox", { name:'Marketing' })
  ).not.toBeChecked();
});

// Newsletter Form - Adding Responses
test("the page shows information the user types into the name and email address form fields", () => {
  // your test code here
  render(<App/>)

  const user = screen.getByLabelText(/Enter name/i);
  const mail = screen.getByLabelText(/Enter email/i);

  userEvent.type(user,"erik")
  userEvent.type(mail,"jasec_7@hotmail.com");

  expect(user).toHaveValue("erik")
  expect(mail).toHaveValue("jasec_7@hotmail.com")
});

test("checked status of checkboxes changes when user clicks them", () => {
  // your test code here
  render(<App/>)

   const Tech = screen.getByRole("checkbox", { name:/Tech/i});
  const Design = screen.getByRole("checkbox", { name:/Design/i});
  const Marketing = screen.getByRole("checkbox", { name:/Marketing/i});

  userEvent.click(Tech);
  userEvent.click(Design);
  userEvent.click(Marketing);

  expect(Tech).toBeChecked();
  expect(Design).toBeChecked();
  expect(Marketing).toBeChecked();


});

test("a message is displayed when the user clicks the Submit button", () => {
  // your test code here
  render(<App/>)

  userEvent.click(screen.getByRole("button",{name:/submit/i}));

  expect(screen.getByText(/thanks for signing up/i)).toBeInTheDocument()
});
