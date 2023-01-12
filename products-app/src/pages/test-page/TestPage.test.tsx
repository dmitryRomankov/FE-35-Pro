import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { TestPage } from "./TestPage";

describe("Test page", () => {
  test("Title renders correctly", () => {
    render(<TestPage name="Dmitry" isShow />);

    const headElement = screen.getByText(/test page/i);
    expect(headElement).toBeInTheDocument();
  });

  test("Description renders correctly", () => {
    render(<TestPage name="Dmitry" isShow />);

    const description = screen.getByText("Description of the page");
    expect(description).toBeInTheDocument();
  });

  test("Description should not be on the page", () => {
    render(<TestPage name="Dmitry" isShow={false} />);

    const description = screen.queryByText("Description of the page");
    expect(description).toBeNull();
  });

  test("Component renders correctly", () => {
    const tree = renderer
      .create(<TestPage name="Dmitry" isShow={false} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
