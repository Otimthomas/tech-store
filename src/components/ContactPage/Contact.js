import React from "react";
import Title from "../Title";

export default function Contact() {
  return (
    <section className='py-5'>
      <div className='col-10 mx-auto col-md-6 my-3'>
        <Title title='contact us' />
        <form
		  action='https://formspree.io/totim1992@gmail.com'
		  method="POST"
          className='mt-5'>
          {/* name */}
          <div className='form-group'>
            <input
              type='text'
              placeholder='Thomas Otim'
              name='firstName'
              className='form-control'
            />
          </div>
          {/* email */}
          <div className='form-group'>
            <input
              type='email'
              placeholder='email@emai.com'
              name='email'
              className='form-control'
            />
          </div>
          {/* subject */}
          <div className='form-group'>
            <input
              type='text'
              placeholder='important!!!'
              name='subject'
              className='form-control'
            />
          </div>
          {/* message*/}
          <div className='form-group'>
            <textarea
              placeholder='Hello there buddy'
              name='message'
              rows='10'
              className='form-control'></textarea>
          </div>
          {/* submit */}
          <div className='form-group'>
            <input
              type='submit'
              value='send'
              className='form-control bg-primary text-white'
            />
          </div>
        </form>
      </div>
    </section>
  );
}
