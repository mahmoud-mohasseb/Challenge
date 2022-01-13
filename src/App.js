import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Showcase from "./components/showcase/Showcase";
import Aboutus from "./components/Aboutus/Aboutus";
import HowtoApply from "./components/HowtoApply/HowtoApply";
import Footer from "./components/Footer/Footer";
import FQA from './components/FQA/FQA';
import FormSection from "./components/FormSection/FormSection";
function App() {
  return (
<div>
   <Navbar/>
   <Showcase/>
   <Aboutus />
   <HowtoApply/>
   <FQA/>
   <FormSection />
   <Footer />
  </div>
  );
}

export default App;
