/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import { rgba } from 'polished';
import quote from 'assets/images/icons/quote.png';
import uber from 'assets/images/logos/uber.png';
import google from 'assets/images/logos/google.png';
import paypal from 'assets/images/logos/paypal.png';
import microsoft from 'assets/images/logos/microsoft.png';
import dribbble from 'assets/images/logos/dribbble.png';
import SectionHeading from 'components/section-heading';

const data = [
  {
    id: 1,
    logo: uber,
    author: 'By Rajesh K., owner of Spice Kitchen',
    quote: `“Capflow Consulting LLP helped me get a loan for my restaurant expansion at a very low interest rate. They were very professional, responsive, and supportive throughout the process. I highly recommend them to anyone looking for business financing.”`,
  },
  {
    id: 2,
    logo: google,
    author: 'By Priya S., founder of Fashionista',
    quote: `“I was struggling to find a loan for my e-commerce business, until I contacted Capflow Consulting LLP. They found me the best loan option for my needs and guided me through the application process. They saved me a lot of time and money. Thank you, Capflow Consulting LLP!”`,
  },
  {
    id: 3,
    logo: paypal,
    author: 'By Amit P., owner of Tech Solutions',
    quote: `“Capflow Consulting LLP is the best debt syndication firm I have ever worked with. They helped me consolidate my debts and lower my monthly payments. They were very friendly, knowledgeable, and transparent. I would definitely use their service again.”`,
  },
  // {
  //   id: 4,
  //   logo: microsoft,
  //   author: '',
  //   quote: `“”`,
  // },
  // {
  //   id: 5,
  //   logo: dribbble,
  //   author: '',
  //   quote: `“”`,
  // },
];

const Testimonials = () => {
  return (
    <Box as="section" id="testimonials" sx={styles.section}>
      <Container>
      <SectionHeading
          sx={styles.heading}
          title="Testimonials"
          description="We specialize in helping businesses raise funds via debt."
        />
        <Tabs
          sx={styles.tabs}
          animated={{ tabPane: true }}
          tabPosition="bottom"
        >
          {data?.map((item) => (
            <TabPane key={item.id} tab={<Image src={item.logo} alt="logo" />}>
              <Box as="blockquote">
                {item.quote}
                <Text as="span" sx={styles.author}>
                  {item.author}
                </Text>
              </Box>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [7, null, null, 9, null, 10, 11],
    pb: [9, null, null, 10, 11],
  },
  tabs: {
    border: 0,
    flexDirection: ['column-reverse', null, null, null, null, 'column'],
    '.rc-tabs-nav': {
      mt: [8, null, null, 9, 11],
    },
    '.rc-tabs-nav-wrap': {
      borderTop: `1px solid ${rgba('#01070D', 0.1)}`,
      justifyContent: 'center',
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      // m: ['0 45px'],
    },
    '.rc-tabs-tab-btn': {
      display: 'flex',
      alignItems: 'center',
      lineHeight: 1,
      outline: 0,
      img: {
        outline: 0,
        maxWidth: [50, 65, null, 110, '80%', '100%'],
        m: ['0 auto'],
      },
    },
    '.rc-tabs-nav-list': {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      pt: [4, null, null, 7, 9],
    },
    '.rc-tabs-tabpane': {
      outline: 0,
      blockquote: {
        fontFamily: 'heading',
        fontWeight: 400,
        fontSize: [2, null, null, 3, 4, 6],
        lineHeight: [1.87, null, null, 2.08],
        position: 'relative',
        maxWidth: 846,
        margin: '0px auto',
        pt: ['12px', null, null, '17px', '13px'],
        pl: [35, 35, 35, 10, 11],
        ':before': {
          background: `url(${quote}) no-repeat`,
          content: `''`,
          position: 'absolute',
          width: 128,
          height: 43,
          left: ['-31px', null, null, '-16px', '-7px', 0],
          top: ['1px', '1px', '1px', 0],
          backgroundSize: ['75%', null, null, '100%'],
        },
      },
      span: {
        color: '#7E8896',
        fontFamily: 'body',
        display: 'flex',
        fontWeight: 500,
        fontSize: [0, 1, 1, 2],
        lineHeight: 2.5,
        mt: [1, null, null, 3],
      },
    },
    '.rc-tabs-ink-bar': {
      top: 0,
      height: 2,
      backgroundColor: '#A17857',
      borderRadius: 5,
    },
  },
};
