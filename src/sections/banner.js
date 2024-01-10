/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image,Input, Flex, Checkbox, Label,Embed} from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import illustration from 'assets/images/banner-illustration.png';
import YoutubePlayer from 'components/YouubePlayer';

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <SectionHeading
            sx={styles.heading}
            title="Welcome to Capflow Consulting LLP"
            description="We are a leading debt syndication firm, empanelled with all major banks and Non-Banking Financial Companies (NBFCs) across India. Our expertise lies in catering to a diverse range of companies ranging from new age startups to well established public listed companies."
          />
           <Flex sx={styles.inputGroup}>
              <Label htmlFor="email" variant="styles.srOnly">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="email-input"
                placeholder="Your email"
              />
              <Button variant="primary">Get Started</Button>
            </Flex>
          {/* <Box as="figure" sx={styles.illustration}>
         
            <Image src={illustration} alt="illustration" /> 

            
           
       
          </Box> */}
          
        </Box>
        <Box sx={{ display: ['block', null, null, 'block'],
      maxWidth: ['90%'],
      m: ['0 auto'],}}>
          <YoutubePlayer
          
          id={"JYnOtueVfJE"}/>
          </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    position: 'relative',
    pt: [105, null, null, 140, 15, null, 170],
    pb: [8, null, null, 0],
    zIndex: 0,
    ':before': {
      backgroundColor: rgba('#FFF5ED', 0.5),
      content: ['none', null, null, `''`],
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
    mb:4,
  },
  heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 1100],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 13],
      lineHeight: [1.57],
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
  },
};
