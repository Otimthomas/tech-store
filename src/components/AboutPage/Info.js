import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function Info() {
  return (
    <section className='py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <img
              src={aboutBcg}
              className='img-fluid img-thumbnail'
              alt='about company image'
              style={{background: "var(--darkGrey)"}}
            />
          </div>
          <div className='col-10 mx-auto col-md-6 my-3'>
            <Title title='about us' />
            <p className='text-muted lead my-3'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              distinctio expedita voluptatem repellendus tempore pariatur totam
              aliquam accusamus debitis! Quas!
            </p>
            <p className='text-muted lead my-3'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
              distinctio expedita voluptatem repellendus tempore pariatur totam
              aliquam accusamus debitis! Quas!
            </p>
            <button className='main-link mt-4' type='button'>
              more infor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
