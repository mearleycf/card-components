import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  mergedLightTheme,
  mergedDarkTheme,
  mergedPcgTheme,
  Theme,
} from "./styles/theme";
import Card from "./components/Card";
import ActionButton, { BorderStyle } from "./components/Button";
import GridComponent, {
  Display,
  GridJustifyItems,
  GridAlignItems,
} from "./components/Grid";
import { faker } from "@faker-js/faker";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [actionIconRight, setActionIconRight] = useState("FaRegSun");

  const cardsData = Array.from({ length: 3 }, () => ({
    imageUrl: faker.image.url(),
    title: faker.person.fullName(),
    content: faker.lorem.paragraph(),
    actionText: "Learn More",
  }));

  const toggleTheme = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        setActionIconRight("FaRegMoon");
        break;
      case "dark":
        setTheme("pcg");
        setActionIconRight("FaPaintRoller");
        break;
      case "pcg":
        setTheme("light");
        setActionIconRight("FaRegSun");
        break;
      default:
        setTheme("light");
        setActionIconRight("FaPaintRoller");
    }
  };

  const themeMap: { [key: string]: Theme } = {
    light: mergedLightTheme,
    dark: mergedDarkTheme,
    pcg: mergedPcgTheme,
  };

  const currentTheme = themeMap[theme];

  return (
    <ThemeProvider theme={currentTheme}>
      <React.Fragment>
        <h1 style={{ margin: `0 ${currentTheme.spacing?.sm || "8px"}` }}>
          Example Cards
        </h1>
        <ActionButton
          onClick={toggleTheme}
          actionText={`current Theme: ${theme}`}
          borderColor="transparent"
          borderSize="0"
          borderStyle={BorderStyle.None}
          actionIconRight={actionIconRight}
        />
        <GridComponent
          display={Display.Grid}
          gridLayoutConfig={{
            extraSmall: "1fr",
            medium: "repeat(2, 1fr)",
            large: "repeat(3, 1fr)",
            default: "repeat(3, 1fr)",
          }}
          gridGap={currentTheme.spacing?.m}
          justifyContent={GridJustifyItems.Center}
          alignItems={GridAlignItems.Start}
        >
          {cardsData.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              content={card.content}
              actionText={card.actionText}
              onActionClick={() => alert("Card Clicked")}
            />
          ))}
        </GridComponent>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
