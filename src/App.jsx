import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Sitemap from './pages/Sitemap';
import Navbar from './components/Navbar';
import FuturisticBackground from './components/FuturisticBackground';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <FuturisticBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Blog />} />
          <Route path="/projects/:slug" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/sitemap.xml" element={<Sitemap />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
