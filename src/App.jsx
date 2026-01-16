import "./App.css";
import "@mantine/core/styles.css";
import { Affix, Box, Flex, Paper, Title } from "@mantine/core";
import { useMediaQuery, useViewportSize } from "@mantine/hooks";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Categories } from "./components/Categories";
import { Books } from "./components/Books";
import { BooksByCateg } from "./components/BooksByCateg";
import { MyMenu } from "./MyMenu";
import { SearchResult } from "./components/SearchResult";
import { Dashboard } from "./components/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useState } from "react";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);
  const { height } = useViewportSize();
  const isMobile = useMediaQuery("(max-width:520px");
  return (
    <BrowserRouter>
      <Affix position={{ top: isMobile ? 50 : 20, right: 20 }}>
        <MyMenu setIsAdmin={setIsAdmin} />
      </Affix>

      <Flex mih={height} justify="center" className="app-root">
        {/* ===== Sticky Header ===== */}
        <Box className="page-header">
          <Title order={1} className="page-title">
            Könyvtár
          </Title>
          <div className="header-underline" />
        </Box>

        {/* ===== Main Content Card ===== */}
        <Routes>
          <Route path="/" element={<Categories />} />

          <Route path="/books" element={<Books />} />
          <Route path="/books/categ/:categId" element={<BooksByCateg />} />
          <Route path="/books/search/:txt" element={<SearchResult />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAdmin={isAdmin}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
