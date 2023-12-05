import styles from './style';

import { Navbar, Stats, Main, Business, Hadder, CardDeal, Testimonial , Clients , CTA , Footer } from './components';

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    {/* HERO SECTION */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Main />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <Stats />
      <Business />
      <Hadder />
      <CardDeal />
      <Testimonial /> 
      <Clients /> 
      <CTA /> 
      <Footer />
    </div>
  </div>
  </div>
);

export default App
