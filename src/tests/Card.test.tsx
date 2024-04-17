import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../components/Card";
import { faker } from "@faker-js/faker";
import { ThemeProvider } from "styled-components";
import { mergedLightTheme } from "../styles/theme";

describe("Card component", () => {
  const cardProps = {
    imageUrl: faker.image.url(),
    title: faker.person.fullName(),
    content: faker.lorem.paragraph(),
    actionText: faker.lorem.word(),
    onActionClick: jest.fn(),
  };

  it("renders the card with the correct content", () => {
    render(
      <ThemeProvider theme={mergedLightTheme}>
        <Card {...cardProps} />
      </ThemeProvider>
    );

    expect(screen.getByText(cardProps.title)).toBeInTheDocument();
    expect(screen.getByText(cardProps.content)).toBeInTheDocument();
    expect(screen.getByText(cardProps.actionText)).toBeInTheDocument();
  });

  it("calls onActionClick when the action button is clicked", () => {
    render(
      <ThemeProvider theme={mergedLightTheme}>
        <Card {...cardProps} />
      </ThemeProvider>
    );

    const actionButton = screen.getByText(cardProps.actionText);
    fireEvent.click(actionButton);

    expect(cardProps.onActionClick).toHaveBeenCalledTimes(1);
  });

  it("displays the image with the correct src and alt attributes", () => {
    render(
      <ThemeProvider theme={mergedLightTheme}>
        <Card {...cardProps} />
      </ThemeProvider>
    );

    const image = screen.getByRole("img", { name: cardProps.title });
    expect(image).toHaveAttribute("src", cardProps.imageUrl);
    expect(image).toHaveAttribute("alt", cardProps.title);
  });
});
