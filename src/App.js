import React, { Suspense } from 'react';

// Lazy load the components
const Banner = React.lazy(() => import('./components/Banner'));
const Header = React.lazy(() => import('./components/Header'));
const Nav = React.lazy(() => import('./components/Nav'));
const About = React.lazy(() => import('./components/About'));
const Work = React.lazy(() => import('./components/Work'));
const Contact = React.lazy(() => import('./components/Contact'));

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Banner />
        <Nav />
        <About />
        <Work />
        <Contact />
      </Suspense>
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default App;
