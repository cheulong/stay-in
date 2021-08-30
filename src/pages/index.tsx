import Head from 'next/head';
import Image from 'next/image';
import About from '../sections/About';
import Banner from '../sections/Banner';
import CompanyServices from '../sections/CompanyServices';
import Contact from '../sections/Contact';
import Products from '../sections/Products';
import Services from '../sections/Services';
import Subscription from '../sections/Subscription';
import Update from '../sections/Update';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <About />
      <CompanyServices />
      <Update />
      <Services />
      <Products />
      <Subscription />
      <Contact />
    </div>
  );
}
