/** @jsxRuntime classic */
/** @jsx jsx */
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import { jsx, Box, Container,Heading,Text } from 'theme-ui';
import Image from 'components/image';
import SectionHeading from 'components/section-heading';
import CorporateFinance from 'assets/images/icons/corporateFinance.png';
import Construction from 'assets/images/icons/constructionFinance.png';
import SupplyChain from 'assets/images/icons/supplyChain.png';
import VendorFinanceIcon from 'assets/images/icons/VendorFinanceIcon.png';
import SalesBillDiscountingIcon from 'assets/images/icons/SalesBillDiscountingIcon.png';
import PurchaseInvoiceDiscountingIcon from 'assets/images/icons/PurchaseInvoiceDiscountingIcon.png';
import DealerFinanceIcon from 'assets/images/icons/DealerFinanceIcon.png';
import SecuredLoan from 'assets/images/icons/securedLoan.png';
import UnsecuredLoan from 'assets/images/icons/UnsecuredLoan.png';
import Startup from 'assets/images/icons/Startup.png';
import SME from 'assets/images/icons/SME.png';
import LOC from 'assets/images/icons/LOC.png';
import BG from 'assets/images/icons/BG.png';
import { LearnMore } from 'components/link';



export default function products() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        
        <SEO
          title="Capflow"
          description="Your Trusted financial Advisor"
        />
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

       
      </Layout>
    </ThemeProvider>
  );
}



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
    {
      id: 4,
      icon: VendorFinanceIcon,
      moreLink: '#learn-more',
      title: 'Vendor Finance',
      description: 'Providing financial solutions for vendors to facilitate smoother transactions and business relationships.',
    },
    {
      id: 5,
      icon: SalesBillDiscountingIcon,
      moreLink: '#learn-more',
      title: 'Sales Bill Discounting / Factoring',
      description: 'A financial service where a business sells its accounts receivable to a third party (factor) at a discount.',
    },
    {
      id: 6,
      icon: PurchaseInvoiceDiscountingIcon,
      moreLink: '#learn-more',
      title: 'Purchase Invoice Discounting',
      description: 'A form of short-term borrowing that allows a company to receive money against its sales invoices before the customer has actually paid.',
    },
    {
      id: 7,
      icon: DealerFinanceIcon,
      moreLink: '#learn-more',
      title: 'Dealer Finance',
      description: 'Financial assistance provided to dealerships for inventory financing, facilitating the purchase of goods to be sold.',
    },
    {
      id: 8,
      icon: SecuredLoan,
      moreLink: '#learn-more',
      title: 'Secured Loans',
      description: 'Financial instruments backed by collateral, reducing risk for the lender. Used for mortgages and business financing.',
    },
    {
      id: 9,
      icon: UnsecuredLoan,
      moreLink: '#learn-more',
      title: 'Unsecured Loans',
      description: 'Loans not backed by collateral, relying on the borrower\'s creditworthiness. Includes personal loans and credit cards.',
    },
    {
      id: 10,
      icon: Startup,
      moreLink: '#learn-more',
      title: 'Startup Debt Funding',
      description: 'Raising capital through debt instruments to support the growth and operations of a startup.',
    },
    {
      id: 11,
      icon: SME,
      moreLink: '#learn-more',
      title: 'Solutions For Smart SME’s (Smart SME Knowledge Hub)',
      description: 'Knowledge hub tailored for SMEs, providing insights, tools, and resources to optimize business operations.',
    },
    {
      id: 12,
      icon: LOC,
      moreLink: '#learn-more',
      title: 'Letter of Credit',
      description: 'Financial document issued by a bank, guaranteeing payment to the seller once specific conditions are met.',
    },
    {
      id: 13,
      icon: BG,
      moreLink: '#learn-more',
      title: 'Bank Guarantee',
      description: 'Financial commitment from a bank ensuring the fulfillment of a contractual obligation between two parties.',
    },
  ];
  


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


const Service = ({ item }) => {
  return (
    <Box sx={styles_service.serviceItem} id="serviceItem">
      
      <Box sx={styles_service.content}>
        <Heading as="h3">{item?.title}</Heading>
        <Text as="p">{item?.description}</Text>
        {item?.moreLink && <LearnMore path={item?.moreLink} />}
      </Box>
      <Box as="figure" sx={styles_service.figure}>
        <Image src={item?.icon} alt="icon" />
      </Box>
    </Box>
  );
};

const styles_service = {
  serviceItem: {
    display: [null, null, null, null, null, 'flex'],
    textAlign: ['center', null, null, null, null, 'left'],
    borderRadius: '8px', 
    border: '1px solid rgba(235,239,247,.8)', 
    boxShadow: '0 2px 4px 0 rgba(5,47,95,.04),0 12px 16px 0 rgba(52,105,203,.12)', 
    p: 5,
    transition: '.3s',
    '&:hover': {
        boxShadow: '0 2px 4px 0 rgba(5, 47, 95, .04), 0 12px 16px 0 rgba(52, 105, 203, .12)',
        transform: 'scale(1.05)', // Adjust the scale factor as needed
        filter: 'grayscale(0)', // Prevent grayscaling on the hovered element
    },
   
  },
  figure: {
    minWidth: [88, null, null, null, null, 70, 88],
    ml: [null, null, null, null, null, 30],
    mb: [2, null, null, null, null, 0],
    img: {
      maxWidth: [42, null, null, 60, 70, '100%'],
    },
    mt: [2, null, null, null, null, null],

  },
  content: {
    h3: {
      color: 'heading',
      fontWeight: 700,
      fontFamily: 'body',
      fontSize: [2, null, null, 17, 3],
      lineHeight: [1.68],
    },
    p: {
      fontSize: [1, null, null, null, 2],
      lineHeight: [1.88],
      mt: [2],
    },
    a: {
      mt: [2, null, null, 3],
    },
  },
};
