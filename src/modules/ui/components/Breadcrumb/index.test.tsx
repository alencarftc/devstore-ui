import { render, screen } from "@testing-library/react";
import { Breadcrumb } from ".";

describe("<Breadcrumb />", () => {
  it("should render an unique path successfully", () => {
    // arrange
    const pathes = [{ href: "/profile", label: "Profile" }];

    // act
    render(<Breadcrumb pathes={pathes} />);
    const linkEls = screen.getAllByRole("link");

    // assert
    expect(linkEls[0].textContent).toBe(pathes[0].label);
    expect(linkEls[0].getAttribute("href")).toBe(pathes[0].href);
    expect(linkEls[0].getAttribute("aria-current")).toBe("page");
  });

  it("should render multiple pathes successfully", () => {
    // arrange
    const pathes = [
      { href: "/profile", label: "Profile" },
      { href: "/profile/notifications", label: "Notifications" },
    ];

    // act
    render(<Breadcrumb pathes={pathes} />);
    const linkEls = screen.getAllByRole("link");

    // assert
    expect(linkEls[0].textContent).toBe(pathes[0].label);
    expect(linkEls[0].getAttribute("href")).toBe(pathes[0].href);
    expect(linkEls[0].getAttribute("aria-current")).toBe(null);

    expect(linkEls[1].textContent).toBe(pathes[1].label);
    expect(linkEls[1].getAttribute("href")).toBe(pathes[1].href);
    expect(linkEls[1].getAttribute("aria-current")).toBe("page");
  });
});
