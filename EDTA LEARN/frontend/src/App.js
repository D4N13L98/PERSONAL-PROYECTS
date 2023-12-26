import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AccountBox from "./components/accountBox/index.jsx";
import Main from "./components/Main.jsx";
import Introduction from "./views/introduction/Introduction.jsx"
import Us from "./views/introduction/Us.jsx";
import Objectives from "./views/introduction/Objectives.jsx";
import Knowledges from "./views/introduction/Knowledges.jsx";
import Resources from "./views/introduction/Resources.jsx";
import Examples from "./views/examples/Examples.jsx";
import ExampleOne from "./views/examples/ExampleOne.jsx";
import ExampleTwo from "./views/examples/ExampleTwo.jsx";
import SimulatorUse from "./views/simulator/SimulatorUse.jsx";
import SimulatorOne from "./views/simulator/SimulatorOne.jsx";
import Exercises from "./views/exercises/Exercises.jsx";
import ExerciseOne from "./views/exercises/ExerciseOne.jsx";
import ExerciseTwo from "./views/exercises/ExerciseTwo.jsx";
import Glosary from "./views/glosary/Glosary.jsx";
import References from "./views/references/References.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AccountBox/>} />
        <Route path="/main" element={<Main />}>
          <Route index Component={Introduction} />
          <Route
            path="/main/introduction/us"
            exact
            Component={Us}
          />
          <Route
            path="/main/introduction/objectives"
            exact
            Component={Objectives}
          />
          <Route
            path="/main/introduction/knowledges"
            exact
            Component={Knowledges}
          />
          <Route
            path="/main/introduction/resources"
            exact
            Component={Resources}
          />
          <Route path="/main/examples" exact Component={Examples} />
          <Route path="/main/examples/cation" exact Component={ExampleOne} />
          <Route path="/main/examples/cation2" exact Component={ExampleTwo} />
          <Route path="/main/simulator" exact Component={SimulatorOne} />
          <Route
            path="/main/simulator/simulatorInstructions"
            exact
            Component={SimulatorUse}
          />
          <Route path="/main/exercises" exact Component={Exercises} />
          <Route path="/main/exercises/cation" exact Component={ExerciseOne} />
          <Route path="/main/exercises/cation2" exact Component={ExerciseTwo} />
          <Route path="/main/glosary" exact Component={Glosary} />
          <Route path="/main/references" exact Component={References} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
