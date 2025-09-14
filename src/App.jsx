import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { GlobalStyles } from "./styles/global";
import { Section } from "./styles/styles";
import { LoadingScreen } from "./components/Animations/LoadingScreen";
import AnimatedBackground from "./components/Animations/AnimatedBackground";
import FadeInAnimation from "./components/Animations/FadeInAnimation";
import { Navbar } from "./components/Navbar";
import { HomeHero } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <ThemeProvider>
        <GlobalStyles />
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <GlobalStyles />
      <AnimatedBackground />
      <Navbar />
      <Section>
        <FadeInAnimation>
          <HomeHero />
        </FadeInAnimation>

        <FadeInAnimation>
          <About />
        </FadeInAnimation>

        <FadeInAnimation>
          <Skills />
        </FadeInAnimation>

        <FadeInAnimation>
          <Education />
        </FadeInAnimation>
        <FadeInAnimation>
          <Experience />
        </FadeInAnimation>

        <FadeInAnimation>
          <Certifications />
        </FadeInAnimation>

        <FadeInAnimation>
          <Projects />
        </FadeInAnimation>

        <FadeInAnimation>
          <Contact />
        </FadeInAnimation>
        <ScrollToTop />
      </Section>
    </ThemeProvider>
  );
}

export default App;
