import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";

describe("Search", () => {
  it("renders headline", async () => {
    const handleClick = jest.fn();
    render(<Search onClickSearch={handleClick} />);
    const inputEl = screen.getByTestId("text-search");
    userEvent.type(inputEl, "user1");
    expect(screen.getByTestId("text-search")).toHaveValue("user1");

    fireEvent.click(screen.getByTestId("search-button"));
    expect(handleClick).toBeCalledTimes(1);
    expect(handleClick).toBeCalledWith("user1");
  });
});
