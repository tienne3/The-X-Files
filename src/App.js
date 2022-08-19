import { Fragment } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./Layouts";
import { publicRoutes } from "~/routes";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </BrowserRouter>
  );
}

export default App;
