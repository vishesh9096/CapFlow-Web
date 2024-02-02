// pages/blog/[slug].js
/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import thumb1 from 'assets/images/blog/1.png';
// import { ThemeProvider } from 'theme-ui';

//blogs
import { jsx, ThemeProvider, Flex, Box, Text, Image } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import YoutubePlayer from 'components/YouubePlayer';



//end
import Layout from 'components/layout';
import theme from 'theme';
import SEO from 'components/seo';
// Dummy data for demonstration
const blogs = [
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



// export default function BlogTemplate({ blog }) {
//   return (
//     <ThemeProvider theme={theme}>
//       <Layout>

//         <SEO
//           title="Capflow"
//           description="Your Trusted financial Advisor"
//         />




//       </Layout>
//     </ThemeProvider>
//   );
// }
export default function BlogTemplate({ blog }) {
  if (!blog) {
    // Handle the case where the blog is not found
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <SEO title="Blog not found" />
          <Flex sx={{ justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            <Text variant="text.heading" fontSize={[4, 5]} color="primary">
              Blog not found
            </Text>
          </Flex>
        </Layout>
      </ThemeProvider>
    );
  }

  const { title, description, thumbnail } = blog;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title={title} description={description} />
        <Box sx={{ maxWidth: '800px', mx: 'auto', ...styles.section , px: [3, null, null, 4]}} >
          <SectionHeading
            sx={styles.heading}
            title={title}

          />
          <Box sx={{ maxWidth: '800px', textAlign: 'center' }} >
            <Image src={thumbnail} alt={title} sx={{ maxWidth: '100%', borderRadius: '8px', margin: 'auto' }} />
          </Box>
          
          <h4 sx={styles.heading.h4}>Hello i am Human?</h4>
          <p sx={styles.heading.p}>{description}</p>

          <Box sx={{
            display: ['block', null, null, 'block'],
            maxWidth: ['90%'],
            m: ['0 auto'],
          }}>
            <YoutubePlayer

              id={"JYnOtueVfJE"} />
          </Box>
          <p sx={styles.heading.p}>{description}</p>


          <p sx={styles.heading.p}>{description}.The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design</p>

          
        </Box>
      </Layout>
    </ThemeProvider>
  );
}

const styles = {
  section: {
    position: 'relative',
    pt: [105, null, null, 140, 15, null, 170],
    pb: [8, null, null, 0],
    zIndex: 0,
    ':before': {
      backgroundColor: rgba('#FFF5ED', 0.5),
      content: ['none', null, null, 'none'],
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      zIndex: -1,
    },
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    mb: 4,
  },
  heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 1100],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 13],
      lineHeight: [1.57],
    },
    h4: {
      fontSize: [4, 5, 6], 
      lineHeight: [1.4],
      mt: 3, 
    },
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2],
      maxWidth: [null, null, null, 500, 560, 900],
    },
  },
  illustration: {
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: ['block', null, null, 'block'],
      maxWidth: ['90%'],
      m: ['0 auto'],
    },
  },
  buttonWrapper: {
    textAlign: ['center'],
    position: ['static', null, null, 'absolute'],
    left: '50%',
    top: 0,
    transform: ['unset', null, null, 'translateX(-50%)'],
  },
  inputGroup: {
    flexDirection: ['column', null, null, 'row'],
    gap: [2, null, null, 3],
  },
};


