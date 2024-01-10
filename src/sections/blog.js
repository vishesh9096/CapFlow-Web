/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';
import thumb1 from 'assets/images/blog/1.png';
import thumb2 from 'assets/images/blog/2.png';
import thumb3 from 'assets/images/blog/3.png';
import thumb4 from 'assets/images/blog/4.png';
import NextLink from 'next/link';

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

const masonryOptions = { originTop: true };
const path ='/'
const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>

        <SectionHeading
          sx={styles.heading}
          title="Our Blogs"
        />

        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {blogs?.map((post) => (

            
            
            <BlogPost key={post.id} post={post} />
           
          ))}
        </Masonry>
        
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [8, null, null, 9, null, 11],
    pb: [8, null, null, 9, null, 11],
    position: 'relative',
  },
  heading: {
    mb: [6, 6, 7, 11],
  },
};
