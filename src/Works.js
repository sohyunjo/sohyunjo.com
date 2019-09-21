import React from 'react';
import WorkContent from './WorkContent';
import { worksItems } from './data/worksItems';

class Works extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className='works'>
        <main className='cf'>
          {worksItems.map((item, i) => {
            return <WorkContent {...item} />;
          })}
        </main>
      </section>
    );
  }
}

export default Works;
