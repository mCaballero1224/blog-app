import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Blog App Pages */
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import EditorPage from './pages/EditorPage';
import ContentPage from './pages/ContentPage';
import StatisticsPage from './pages/StatisticsPage';

/* Regular Site Pages */
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            {/* Blog App Pages */}
            <Route path="/dashboard" element={<DashboardPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/editor" element={<EditorPage/>}/>
            <Route path="/stats" element={<StatisticsPage/>}/>
            <Route path="/content" element={<ContentPage/>}/>
        </Routes>
    </Router>
  );
}

export default App;
