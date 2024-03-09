import React from 'react'
import './Plans.css';
import {plansData} from '../../data/plansData'; 
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header">
        <sapn className='stroke-text'>Ready To start</sapn>
        <sapn> your journey</sapn>
        <sapn className='stroke-text'>now with us</sapn>
      </div>
      {/* plans card */}
      <div className="plans">
  {plansData.map((plan, i) => (
    <div className="plan" key={i}>
      {plan.icon}
      <span>{plan.name}</span>
      <span>${plan.price}</span>
      <div className="features">
        {plan.features.map((feature, j) => (
          <div className="feature" key={j}>
            <img src={whiteTick} alt="" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <div className='last'>
        <span >
          See more benefits ->
        </span>
        <button className="btn butt">Join Now</button>
      </div>
    </div>
  ))}
</div>

       
       
    </div>
  )
}

export default Plans
