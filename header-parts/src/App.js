import logo from './logo.svg';
import Header from './components/header_section/Header';
import Hero_section from './components/hero_section/Hero_section';
import Job_description_section from './components/job_description/Job_description_section';
import Summary from './components/summary_cv_jd_match/Summary';
import Flexible_approval from './components/flexible_approval/Flexible_approval';
import CandidatesScore from './components/candidates_score/CandidatesScore';
import Workflow from './components/workflow/Workflow';
import CustomerSlider from './components/slider_section/CustomerSlider';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero_section />
      <Job_description_section />
      <CandidatesScore />
      <Summary />
      <Workflow />
      <Flexible_approval />
      <CustomerSlider />
    </div>
 
    // <div className="container">
    //   <div className="laptop">
    //     <img src={laptopImage} alt="Laptop" />
    //     <div className="logo">
    //       <img src={logoImage} alt="Logo" />
    //     </div>
    //   </div>
    // </div>

  );
}

export default App;
