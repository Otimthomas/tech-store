import React from "react";
import styled from "styled-components";
import {FaDolly, FaRedo, FaDollarSign} from "react-icons/fa";

export default function Services() {
  return (
    <ServicesWrapper className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-sm-6 col-md-4 text-center my-3'>
            <div className='service-icon'>
              <FaDolly />
            </div>
            <div className='mt-3 text-capitalize'>free shipping</div>
            <div className='mt-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              explicabo.
            </div>
          </div>
		  <div className='col-10 mx-auto col-sm-6 col-md-4 text-center my-3'>
            <div className='service-icon'>
              <FaRedo />
            </div>
            <div className='mt-3 text-capitalize'>30 days return policy</div>
            <div className='mt-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              explicabo.
            </div>
          </div>
		  <div className='col-10 mx-auto col-sm-6 col-md-4 text-center my-3'>
            <div className='service-icon'>
              <FaDollarSign />
            </div>
            <div className='mt-3 text-capitalize'>secured payment</div>
            <div className='mt-3'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              explicabo.
            </div>
          </div>
        </div>
      </div>
    </ServicesWrapper>
  );
}

const ServicesWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
  p {
    color: var(--darkGrey);
  }
`;
