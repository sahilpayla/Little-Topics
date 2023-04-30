import React from 'react'
import Hero_section from '../components/hero_section/Hero_section'
import Job_description_section from '../components/job_description/Job_description_section'
import CandidatesScore from '../components/candidates_score/CandidatesScore'
import Summary from '../components/summary_cv_jd_match/Summary'
import Workflow from '../components/workflow/Workflow'
import Flexible_approval from '../components/flexible_approval/Flexible_approval'
import CustomerSlider from '../components/slider_section/CustomerSlider'
import Footer from '../components/footer_section/Footer'
import Curve from '../components/curve/Curve'

const Home = () => {
    return (
        <>
            <Hero_section />
            <Curve />
            <Job_description_section />
            <CandidatesScore />
            <Summary />
            <Workflow />
            <Flexible_approval />
            <CustomerSlider />
            <Footer />
        </>
    )
}

export default Home