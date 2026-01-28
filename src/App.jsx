import { Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Main Site Components
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import BlogPostView from './Components/BlogPostView';
import ScrollToTop from './Components/ScrollToTop';

// Pages
import HomePage from './Pages/HomPage';
import AboutServices from './Pages/AboutServices';
import Projects from './Pages/Projects';
import Blog from './Pages/Blog';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Pages/AdminDashboard';
import ContactPage from './Pages/ContactPage';
import AdminProjects from './Pages/AdminProjects';
import AdminAnalytics from './Pages/AdminAnalytics';
import AdminSettings from './Pages/AdminSettings';
import AdminBlog from './Pages/AdminBlog';
import ServiceHub from './Pages/ServiceHub';
import PhotographyServices from './Components/PhotographyServices';
import WebsiteServices from './Components/WebsiteServices';
import MusicEducation from './Components/MusicEducation';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsOfService from './Pages/TermsOfService';
import ComingSoon from './Pages/ComingSoon';
// import AdminInsights from './Pages/AdminInsights';


function App() {
  const location = useLocation();

  // Check if the current path starts with /admin to hide the main NavBar and Footer
  const isAdminPage = location.pathname.startsWith('/Admin');

  return (
    <div className="bg-[#0a0f1a] selection:bg-blue-500/30 selection:text-white min-h-screen">
      <Toaster position="bottom-right" />

      {/* Only show NavBar if we are NOT in the Admin portal */}
      {!isAdminPage && <NavBar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutServices />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog/:id" element={<BlogPostView />} />
        <Route path="/comingSoon" element={<ComingSoon />} />

        {/* --- NEW SERVICE ROUTES --- */}
        <Route path="/services" element={<ServiceHub />} />
        <Route path="/services/photography" element={<PhotographyServices />} />
        <Route path="/services/web" element={<WebsiteServices />} />
        <Route path="/services/music" element={<MusicEducation />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />

        {/* Admin Routes */}
        <Route path="/Admin/login" element={<AdminLogin />} />
        <Route path="/Admin/dashboard" element={<AdminDashboard />} />
        <Route path="/Admin/projects" element={<AdminProjects />} />
        <Route path="/Admin/analytics" element={<AdminAnalytics />} />
        <Route path="/Admin/settings" element={<AdminSettings />} />
        <Route path="/Admin/posts" element={<AdminBlog />} />
      </Routes>

      {/* Only show Footer if we are NOT in the Admin portal */}
      {!isAdminPage && <Footer />}
    </div>
  );
}

export default App;