/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import banner from '../assets/images/banner-illustration.png';
// import emoji from 'assets/images/icons/emoji-3.png';


const HappyCustomer = () => {
  return (
    <Box as="section" variant="section.happyCustomer" >
         <SectionHeading
          sx={{mt:40}}
            
          title="Why Choose Us?"
        />
      <Container >
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <Image src={banner} alt="feature" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="At Capflow Consulting LLP, we believe in delivering results."
              description="Our track record speaks for itself. We have helped businesses ranging from startups to family-run high vintage businesses to raise funds via debt. We invite you to become a part of our success story."
            />
            <Box sx={styles.learnMore}>
              {/* <LearnMore path="#!" /> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HappyCustomer;

const styles = {
  contentWrapper: {
    mt:40,
    mb:100,
    gap: [0, 0, 0, 0, 10, 50],
    display: ['block', 'block', 'block', 'flex', 'grid'],
    gridTemplateColumns: '1.1fr 0.9fr',
    flexDirection: ['unset', 'unset', 'unset', 'column', 'unset'],
    alignItems: 'center',
  },
  heading: {
    maxWidth: ['295px', '395px', 'none', '480px', 'none'],
    textAlign: ['center', 'center', 'left', 'center', 'left'],
    mb: ['20px'],
    h2: {
      fontSize: ['24px', '24px', '24px', '32px', '32px', '36px', '36px'],
      lineHeight: [1.45, 1.26],
      letterSpacing: '-1px',
    },
    img: {
      maxWidth: ['24px', '24px', '24px', '30px', '30px', '30px', '100%'],
      top: ['4px', '8px'],
    },
    p: {
      fontSize: ['17px'],
      lineHeight: [2, 2, 2, 2.48],
      maxWidth: [460],
      ml: [0],
    },
  },
  learnMore: {
    textAlign: ['center', 'center', 'left', 'center', 'left'],
  },
  accordionGroup: {
    '.accordion-item': {
      backgroundColor: '#F6F8FB',
      borderRadius: 10,
      p: '30px 45px',
      '&.is-open': {
        backgroundColor: '#fff',
        boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)',
      },
    },
  },
};
