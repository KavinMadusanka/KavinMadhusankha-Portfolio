import React from 'react';
import Layout from '../../layouts/Layout.jsx';
import HomeFirstView from './HomeFirstView.jsx';
import FeaturedProjectView from './FeaturedProjectView.jsx';
import SkillView from './SkillView.jsx';

const HomeView = () => {
  return (
    <Layout>
        <HomeFirstView/>
        <FeaturedProjectView/>
        <SkillView/>

    </Layout>
  )
}

export default HomeView;