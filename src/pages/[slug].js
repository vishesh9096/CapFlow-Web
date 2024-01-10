// pages/blog/[slug].js

import React from 'react';
import thumb1 from 'assets/images/blog/1.png';
import { ThemeProvider } from 'theme-ui';
import Layout from 'components/layout';
import theme from 'theme';
import SEO from 'components/seo';
// Dummy data for demonstration
const blogs =  [
    {
      id: 1,
      slug: 'how-to1',
      thumbnail: thumb1,
      showDescription: true,
      title: `How to work with prototype design with adobe xd featuring tools`,
      description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
    },
    {
      id: 2,
      slug: 'how-to2',
      thumbnail: thumb1,
      showDescription: true,
      title: `How to work with prototype design with adobe xd featuring tools`,
      description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
    },
    {
      id: 3,
      slug: 'how-to3',
      thumbnail: thumb1,
      showDescription: true,
      title: `How to work with prototype design with adobe xd featuring tools`,
      description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
    },
    {
      id: 4,
      slug: 'how-to4',
      thumbnail: thumb1,
      showDescription: true,
      title: `How to work with prototype design with adobe xd featuring tools`,
      description: `The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design`,
    },
  ];

// Generate dynamic paths at build time
export async function getStaticPaths() {
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));
  console.log("indide")


  return { paths, fallback: true };
}

// Fetch data for the current blog
export async function getStaticProps({ params }) {
  console.log("params slug", params.slug)
  const currentBlog = blogs.find((blog) => blog.slug.toString() === params.slug.toString());

  if (!currentBlog) {
    console.log("not found")
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog: currentBlog,
    },
  };

}

// Blog template component



export default function BlogTemplate({ blog }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        
        <SEO
          title="Capflow"
          description="Your Trusted financial Advisor"
        />

        

       
      </Layout>
    </ThemeProvider>
  );
}



