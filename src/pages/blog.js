import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import OurTeam from 'sections/our-team';
import OtherServices from 'sections/other-services';
import WhyUs from 'sections/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/blog';
import HappyCustomer from 'sections/happy-customer';

export default function blog() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        
        <SEO
          title="Capflow"
          description="Your Trusted financial Advisor"
        />

<Blog />

       
      </Layout>
    </ThemeProvider>
  );
}
