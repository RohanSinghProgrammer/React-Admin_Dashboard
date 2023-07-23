import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppLayout from "./layouts/AppLayout";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import SingleUserPage from "./pages/SingleUserPage";
import SingleProductPage from "./pages/SingleProductPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="user/:id" element={<SingleUserPage />} />
          <Route path="product/:id" element={<SingleProductPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
