import { render, screen } from "@testing-library/react";
import { Breadcrumbs } from ".";
import { MemoryRouter } from "react-router-dom";

describe("<Breadcrumbs />", () => {
  it("it should render", () => {
    // act
    render(
      <MemoryRouter
        basename="/aloha"
        initialEntries={["/account/preferences/notifications"]}
      >
        <Breadcrumbs actual={"Notifications"} />
      </MemoryRouter>
    );
    const breadcrumbEls = screen.getByRole("listitem");

    // assert
    expect(breadcrumbEls).toBe(["Account", "Preferences", "Notifications"]);
  });
});
