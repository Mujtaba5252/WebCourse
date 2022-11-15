import React from "react";
import './Accordian.css'

function Accordian() {
  return (
    <div >
      <div>
        <h1 className="nameHeading text-start">MUJTABA ALI SAIF</h1>
        <p className="text-start webDeveloper"><strong >WEB DEVELOPER</strong></p>
      <p className="text-start"><small>A deligent and self-driven software developer with vigorous problem solving skills looking for internship in a
competitive and learning based environment where I can actively enhance my technical and communications skills and can practically apply my theoretical knowledge to solve the real world problem.</small></p>
      </div>
   <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        EDUCATION
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    
      <div className="accordion-body">
        <div className="container">
        <div className="row">
          <div className="col">
                <h3 className="text-start">EDUCATION</h3>
                 <p className="text-start"><strong>Intermediate</strong></p>
                <p className="text-start">Islamabad Model College for Boys 1-10/1</p>
                <p className="text-start">03/2016 - 03/2018</p>
          </div>
          <div className="col">
                 <p className="text-start educationMargin"><strong>Bachelors in Software Engineering</strong></p>
                <p className="text-start">NUML University Islamabad</p>
                <p className="text-start">09/2019 - Present </p>
          </div>

        </div>
        
        
        
      </div>
      </div>
    </div>

{/* Project accordion */}
    <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        PROJECTS
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="row">
          <div className="col">
          <h3 className="text-start">Projects</h3>
                 <p className="text-start"><strong>Online Exam Platform(FYP)</strong></p>
                <p className="text-start">MERN Stack</p>
                <p className="text-start">Teacher can create different type exam based on proctoring</p>
                <p className="text-start">Instant Evaluation</p>
                <p className="text-start">OCR Based Exam</p>
                <p className="text-start">Tool/Graphic based Exam</p>

          </div>
          <div className="col">
          
                 <p className="text-start project"><strong>Online Exam Platform(FYP)</strong></p>
                <p className="text-start ">MERN Stack</p>
                <p className="text-start">Teacher can create different type exam based on proctoring</p>
                <p className="text-start">Instant Evaluation</p>
                <p className="text-start">OCR Based Exam</p>
                <p className="text-start">Tool/Graphic based Exam</p>

          </div>

        </div>
      </div>
    </div>
  </div>

  {/* skill accordian */}
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        INTEREST
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <div className="row">
          <div className="col">
          <h3 className="text-start">INTEREST</h3>
                <p className="text-start">React Development</p>
                <p className="text-start">Web Development</p>
                <p className="text-start">Front End Development</p>
                
               

          </div>

        </div>
      </div>
    </div>
  </div>

  {/* next accordiamm */}



  </div>

</div>


    </div>
  );
}

export default Accordian;
