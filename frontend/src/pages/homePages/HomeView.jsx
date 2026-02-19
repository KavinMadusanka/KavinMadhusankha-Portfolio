import React from 'react';
import Layout from '../../layouts/Layout.jsx';
import HomeFirstView from './HomeFirstView.jsx';
import FeaturedProjectView from './FeaturedProjectView.jsx';

const HomeView = () => {
  return (
    <Layout>
        <HomeFirstView/>
        <FeaturedProjectView/>

    </Layout>
  )
}

export default HomeView;