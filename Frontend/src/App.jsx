import { Routes, Route, Navigate } from "react-router-dom";
import './index.css';
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import TopicsPage from "./Components/Topics";
import QuizPage from "./Components/Questions";
import ForgotPassword from "./Components/ForgotPassword";


//import GroupByExplanation from "./GroupBy";
import DescriptionPage from "./Components/Description";
import FAQsPage from "./Components/Faqs";
import ContactUs from "./Components/contactUs";//Contact us
import AboutPage from "./Components/About";
import LandingPage from "./Components/FrontPage";
import ProfilePage from "./Components/Profile";
//import Dashboard from "./Components/GameDashboard";
import GameDashboard from "./Components/GameDashboard";
import Level1Game from "./Components/Game/Level1";
import Leaderboard from "./Components/Game/Leaderboard";
import Level2Game from "./Components/Game/Level2";
import Level3Game from "./Components/Game/Level3";
import ResetPassword from "./Components/ResetPassword";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={< Home />} />
        <Route path="/topics" element={< TopicsPage />} />
        <Route path="/quiz/:topicId" element={<QuizPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* <Route path="/groupby" element={<GroupByExplanation />} /> */}
        <Route path="/description/:topicId" element={<DescriptionPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/game-dashboard" element={<GameDashboard />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/sql-game" element={<GameDashboard />} />
        <Route path="/level1" element={<Level1Game />} />
        <Route path="/level2" element={<Level2Game />} />
        <Route path="/level3" element={<Level3Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;