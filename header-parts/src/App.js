import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Hero_section from './components/hero_section/Hero_section';
import Job_description_section from './components/job_description/Job_description_section';
import Summary from './components/summary_cv_jd_match/Summary';
import Flexible_approval from './components/flexible_approval/Flexible_approval';



function App() {
  return (
    <div className="App">
      <Header />
      <Hero_section />
      <Job_description_section />
      <Summary />
      <Flexible_approval />
    </div>
  );
}

export default App;
