import React from "react";
import styled from "styled-components";
import {FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className='container py-3'>
        <div className='row'>
          <div className='col-md-6'>
            <p className='text-capitalize'>
              copyright &copy; tech store
              {new Date().getFullYear}. all rights reserved
            </p>
          </div>
          <div className='col-md-6 d-flex justify-content-around'>
            <a href='#'>
              <FaFacebook className='icon' />
            </a>
            <a href='#'>
              <FaTwitter className='icon' />
            </a>
            <a href='#'>
              <FaLinkedin className='icon' />
            </a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background: var(--darkGrey);
  color: var(--mainWhite);
  .icon {
    font-size: 1.5rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
  }
  .icon:hover {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;
