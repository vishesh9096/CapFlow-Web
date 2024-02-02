/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon4 from 'assets/images/icons/service4.png';
import icon5 from 'assets/images/icons/service5.png';
import icon6 from 'assets/images/icons/service6.png';
import icon7 from 'assets/images/icons/service7.png';
import icon8 from 'assets/images/icons/service8.png';
import icon9 from 'assets/images/icons/service9.png';
import anurag from 'assets/images/icons/home.png';
import CorporateFinance from 'assets/images/icons/corporateFinance.png';
import Construction from 'assets/images/icons/constructionFinance.png';
import SupplyChain from 'assets/images/icons/supplyChain.png';
import SecuredLoan from 'assets/images/icons/securedLoan.png';
import UnsecuredLoan from 'assets/images/icons/UnsecuredLoan.png';
import Startup from 'assets/images/icons/Startup.png';
import SME from 'assets/images/icons/SME.png';
import LOC from 'assets/images/icons/LOC.png';
import BG from 'assets/images/icons/BG.png';

// const data = [
//   {
//     id: 1,
//     icon: anurag,
//     moreLink: '#learn-more',
//     title: '3D modeling & art',
//     description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
//   },
//   {
//     id: 2,
//     icon: icon5,
//     moreLink: '#learn-more',
//     title: 'Digital promotion',
//     description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
//   },
//   {
//     id: 3,
//     icon: icon6,
//     moreLink: '#learn-more',
//     title: 'Business Enterprise',
//     description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
//   },
//   {
//     id: 4,
//     icon: icon7,
//     moreLink: '#learn-more',
//     title: 'Marketing & advertising',
//     description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
//   },
//   {
//     id: 5,
//     icon: icon8,
//     moreLink: '#learn-more',
//     title: 'Ultimate development',
//     description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
//   },
//   {
//     id: 6,
//     icon: icon9,
//     moreLink: '#learn-more',
//     title: 'Online support',
//     description: `Get your info tests delivered at home collect a sample from the your progress tests.`,
//   },
// ];

const data = [
  {
    id: 1,
    icon: CorporateFinance,
    moreLink: '#learn-more',
    title: 'Corporate Finance',
    description: 'Financial activities related to running a corporation, overseeing cash management, accounts, payroll, and investments.',
  },
  {
    id: 2,
    icon: Construction,
    moreLink: '#learn-more',
    title: 'Construction Finance',
    description: 'Funding for construction projects, managing costs through loans, project financing, and risk management.',
  },
  {
    id: 3,
    icon: SupplyChain,
    moreLink: '#learn-more',
    title: 'Supply Chain Finance',
    description: 'Optimizing cash flow within a supply chain, enhancing collaboration between buyers and suppliers.',
  },
  // Continue the same pattern for the remaining products
  {
    id: 4,
    icon: SecuredLoan,
    moreLink: '#learn-more',
    title: 'Secured Loans',
    description: 'Financial instruments backed by collateral, reducing risk for the lender. Used for mortgages and business financing.',
  },
  {
    id: 5,
    icon: UnsecuredLoan,
    moreLink: '#learn-more',
    title: 'Unsecured Loans',
    description: 'Loans not backed by collateral, relying on the borrower\'s creditworthiness. Includes personal loans and credit cards.',
  },
  // Continue adding information for the remaining products
  {
    id: 6,
    icon: Startup,
    moreLink: '#learn-more',
    title: 'Startup Debt Funding',
    description: 'Raising capital through debt instruments to support the growth and operations of a startup.',
  },
  {
    id: 7,
    icon: SME,
    moreLink: '#learn-more',
    title: 'Solutions For Smart SME’s (Smart SME Knowledge Hub)',
    description: 'Knowledge hub tailored for SMEs, providing insights, tools, and resources to optimize business operations.',
  },
  {
    id: 8,
    icon: LOC,
    moreLink: '#learn-more',
    title: 'Letter of Credit',
    description: 'Financial document issued by a bank, guaranteeing payment to the seller once specific conditions are met.',
  },
  {
    id: 9,
    icon: BG,
    moreLink: '#learn-more',
    title: 'Bank Guarantee',
    description: 'Financial commitment from a bank ensuring the fulfillment of a contractual obligation between two parties.',
  },
];


const OtherServices = () => {
  return (
    <Box as="section" sx={styles.section}>
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
export default OtherServices;

const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [9, 9, 9, 14],
    pb: [9, 9, 9, 12, 12, 14],
  },
  heading: {
    mb: [6, null, null, 8, 9, null, 13],
    p: {
      maxWidth: 500,
      margin: '10px auto 0',
    },
  },
  contentWrapper: {
    gap: ['30px 30px', '30px 30px', '30px 30px', '80px 30px'],
    display: 'grid',
    justifyContent: ['center', 'center', 'center', 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
