import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import QuestionPage from "pages/QuestionPage";
import ResultPage from "pages/ResultPage";

const App = () => (
    <BrowserRouter>
        <Route exact path="/">
            <HomePage />
        </Route>
        <Route path="/question">
            <QuestionPage />
        </Route>

        <Route path="/result">
            <ResultPage />
        </Route>
    </BrowserRouter>
);

export default App;
