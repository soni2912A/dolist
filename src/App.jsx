
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Feature'
import Testimonial from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import DataTable from './components/dataTable'

function App() {
  const [showTable, setShowTable] = useState(false)
  return (
    <div>
    <Navbar/>
   <Hero setShowTable={setShowTable} />
    <Features/>
    <Testimonial/>
    <CTA/>
    <DataTable showTable={showTable}/>
    <Footer/>

    </div>
    
  )
}

export default App