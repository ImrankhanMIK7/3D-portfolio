import { lazy, Suspense } from "react";
import "./App.css";

import MainContainer from "./components/MainContainer";
const CharacterModel = lazy(() => import("./components/Character"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
