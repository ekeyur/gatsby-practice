import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p> I am currently in between jobs</p>
      <p> Want to work with me? Reach out <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default AboutPage;