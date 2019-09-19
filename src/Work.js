import React from 'react';
import Word from './Word';
import { workItems } from './data/workItems';

class Work extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='gallery'>
        <main className='cf pa2'>
          {workItems.map((item, i) => {
            return (
              <div className='fl w-100 pa2 mv4 relative'>
                <div
                  className={
                    (i % 2 == 0 ? 'fl ' : 'fr ') +
                    'w-100 w-40-ns mh' +
                    (Math.floor(Math.random() * 2) + 6) +
                    '-ns ma3 ph3'
                  }
                  key={i}
                >
                  <a href={item.href} className={item.className}>
                    <img
                      className='db w-100'
                      src={item.src}
                      alt={item.header}
                    />
                  </a>
                  <h1
                    className='f-subheadline-l absolute'
                    style={{ transform: 'translateY(-55%)', top: '50%' }}
                  >
                    {item.header}
                  </h1>
                </div>
              </div>
            );
          })}
        </main>
      </section>
    );
  }
}

export default Work;
