import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='contact' ref={this.props.refProp}>
        <div className='center pt6'>
          <form class='measure center'>
            <fieldset id='contact' class='ba b--transparent ph0 mh0'>
              <legend className='f4 fw6 ph0 mh0'>Say hello!</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' for='email-address'>
                  Email
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent w-100 br2'
                  type='email'
                  name='email-address'
                  id='email-address'
                />
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' for='subject'>
                  Subject
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent w-100 br2'
                  type='text'
                  name='subject'
                  id='subject'
                />
              </div>
              <div className='mv3'>
                <label for='comment' className='f6 b db mb2'>
                  Comments <span className='normal black-60'></span>
                </label>
                <textarea
                  id='comment'
                  name='comment'
                  className='db border-box w-100 measure ba b--black-20 pa2 br2 mb2'
                  aria-describedby='comment-desc'
                ></textarea>
              </div>
            </fieldset>
            <div className=''>
              <input
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='send'
                value='Send'
              />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
