import Layout from "./layouts/Layout";
import IndexPage from "./views/IndexPage";
import FavoritesPages from "./views/FavoritesPages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<IndexPage />} index />
          <Route path="/favoritos" element={<FavoritesPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
