import React from 'react';

function Progress(){
  return (
<div>
<div>
  <div>
    <h2 className='text-start'>SKILLS</h2>
  </div>
  <p className='text-start'><strong>HTML</strong></p>
  <div className="progress">
    
    <div className="progress-bar bg-success" role="progressbar" style={{width: '95%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
  </div>
  <p className='text-start'><strong>Tailwind</strong></p>
  <div className="progress">
    <div className="progress-bar bg-info" role="progressbar" style={{width: '80%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
  </div>
  <p className='text-start'><strong>React Js</strong></p>
  <div className="progress">
    <div className="progress-bar bg-warning" role="progressbar" style={{width: '65%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
  </div>
  <p className='text-start'><strong>Node js</strong></p>
  <div className="progress">
    <div className="progress-bar bg-danger" role="progressbar" style={{width: '45%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
  </div>
</div>

</div>


  )
}

export default Progress;