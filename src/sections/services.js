/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';


const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Project Loans',
    description: `Facilitating funding for various business projects.`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'Term Loans',
    description: `Providing industry-leading term loans tailored to your needs.`,
  },
  {
    id: 3,
    icon: icon3,
    title: 'Secured/Unsecured Working Capital',
    description: `Expertise in securing both secured and unsecured working capital.`,
  },
  {
    id: 4,
    icon: icon2,
    title: 'Purchase and Sales Invoice Discounting',
    description: `Offering financial solutions through invoice discounting for smoother cash flow.`,
  },
  {
    id: 5,
    icon: icon3,
    title: 'Vendor Financing',
    description: `Assisting businesses with financing options for vendor transactions.`,
  },
  {
    id: 6,
    icon: icon1,
    title: 'Bank Guarantee & Letter of Credit',
    description: `Arranging financial instruments for international trade and supporting domestic business transactions`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Our Products"
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 1100],
    mb: [6, null, null, 8, null, 9, 13],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
    },
    p: {
      fontSize: [1, null, null, 2],
      lineHeight: [1.87, null, null, 2],
      maxWidth: [null, null, null, 500, 560, 900],
    },
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
