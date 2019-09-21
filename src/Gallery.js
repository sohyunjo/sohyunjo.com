import React from 'react';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='gallery pt3'>
        <main className='cf helvetica dark-gray bg-white pa3 pa4-m pa5-l mw9 center'>
          <div className='fl w-50 pr2 pr3-l mb3 mb4-l'>
            <div
              className='cover pv5 pv6-m pv7-l'
              style={{
                background:
                  'black url(http://mrmrs.github.io/photos/v/022.jpg) center'
              }}
            ></div>
          </div>
          <div className='fl w-50 w-25-l pl2 pr2-m ph2-l mb3 mb4-l'>
            <div
              className='cover pv5 pv6-m pv7-l'
              style={{
                background:
                  'black url(http://mrmrs.github.io/photos/v/024.jpg) center'
              }}
            >
              {' '}
            </div>
          </div>
          <div className='fl w-50 w-50 w-25-l pr2 pr0-l pl3-l mb3 mb4-l'>
            <div
              className='cover pv5 pv6-m pv7-l'
              style={{
                background:
                  'black url(http://mrmrs.github.io/photos/050.jpg) left'
              }}
            >
              {' '}
            </div>
          </div>
          <div className='fl w-50 w-50 w-25-l pl2 pl0-l pr2-m pr4-l mb3 mb4-l'>
            <div
              className='cover pv5 pv6-m pv7-l'
              style={{
                background:
                  'black url(http://mrmrs.github.io/photos/049.jpg) center'
              }}
            >
              {' '}
            </div>
          </div>
        </main>
      </section>
    );
  }
}

export default Gallery;
