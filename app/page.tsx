
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Home() {
  return (
    <main>
      <Header />
      <Box component="main">
        <Toolbar />
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Contact />
      </Box>
    </main>
  );
}
