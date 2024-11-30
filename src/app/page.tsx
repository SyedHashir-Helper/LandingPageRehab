
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroHomeOne from '@/components/hero/HeroHomeOne';
import FeatureHomeOne from '@/components/feature/FeatureHomeOne';
import AboutHomeOne from '@/components/about/AboutHomeOne';
import ProjectHomeOne from '@/components/project/ProjectHomeOne';
import FunfactHomeOne from '@/components/funfact/FunfactHomeOne';
import VideoHomeOne from '@/components/video/VideoHomeOne';
import TestimonialHomeOne from '@/components/testimonial/TestimonialHomeOne';
import ServiceHomeOne from '@/components/service/ServiceHomeOne';
import TeamHomeOne from '@/components/team/TeamHomeOne';
import BusinessHomeOne from '@/components/business/BusinessHomeOne';
import CtaHomeOne from '@/components/cta/CtaHomeOne';
import BlogHomeOne from '@/components/blog/BlogHomeOne';
import BrandHomeOne from '@/components/brand/BrandHomeOne'; 
import FooterOne from '@/layouts/footers/FooterOne';
import Wrapper from '@/layouts/Wrapper';
import HeaderTwo from '@/layouts/headers/HeaderTwo';
import HeroHomeTwo from '@/components/hero/HeroHomeTwo';
import AboutHomeTwo from '@/components/about/AboutHomeTwo';
import ServiceHomeTwo from '@/components/service/ServiceHomeTwo';
import NewsletterHomeTwo from '@/components/newsletter/NewsletterHomeTwo';
import TestimonialHomeTwo from '@/components/testimonial/TestimonialHomeTwo';
import TechnologyHomeTwo from '@/components/technology/TechnologyHomeTwo';
import SolutionHomeTwo from '@/components/solution/SolutionHomeTwo';
import PricingHomeThree from '@/components/pricing/PricingHomeThree';
import TeamHomeTwo from '@/components/team/TeamHomeTwo';
import FaqHomeTwo from '@/components/faq/FaqHomeTwo';
import CtaHomeTwo from '@/components/cta/CtaHomeTwo';
import BrandHomeTwo from '@/components/brand/BrandHomeTwo';
 


export const metadata = {
  title: "Tecch - Technology & IT Solutions Next js Template",
};


const index = () => {
  return (
    // <Wrapper>
    //   <HeaderOne />
    //   <main>
    //     <HeroHomeOne />
    //     <FeatureHomeOne />
    //     <AboutHomeOne />
    //     <ProjectHomeOne />
    //     <FunfactHomeOne />
    //     <VideoHomeOne />
    //     <TestimonialHomeOne />
    //     <ServiceHomeOne />
    //     <BusinessHomeOne />
    //     <TeamHomeOne />
    //     <CtaHomeOne />
    //     <BlogHomeOne />
    //     <BrandHomeOne />
    //   </main>
    //   <FooterOne />
    // </Wrapper>
    <Wrapper>
      <HeaderTwo />
      <main>
        <HeroHomeTwo />
        <AboutHomeTwo />
        <ServiceHomeTwo />
        <NewsletterHomeTwo />
        {/* <ProjectHomeTwo /> */}
        <TestimonialHomeTwo />
        <TechnologyHomeTwo />
        <SolutionHomeTwo />
        <PricingHomeThree/>
        {/* <Price/> */}
        <TeamHomeTwo />
        <FaqHomeTwo />
        <CtaHomeTwo />
        {/* <BlogHomeTwo /> */}
        <BrandHomeTwo />
      </main>
      <FooterOne style_2={true} />
    </Wrapper>
  );
};

export default index;