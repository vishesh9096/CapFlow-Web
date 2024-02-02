/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text, Container, Image } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import Layout from 'components/layout';
import theme from 'theme';

const ConstructionFinanceSection = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Box sx={{ ...styles.hero }}>
                    <Container sx={styles.heroContent}>
                        <Heading as="h1" sx={styles.heroTitle}>
                            Construction Finance Solutions
                        </Heading>
                        <Text as="p" sx={styles.heroSubtitle} >
                            At Capflow Consulting LLP, we recognize the distinctive financial challenges inherent in construction projects. Our specialized Construction Finance solutions are meticulously crafted to empower your firm with the financial resources required to bring your projects to fruition.
                        </Text>
                    </Container>
                </Box>

                <Container sx={{display: 'flex', flexDirection: 'column', gap: 10,mt: 6 }}>
                    <SectionHeading
                        title="How It Works ?"
                        description="Embark on your construction projects with confidence, knowing that Capflow Consulting LLP has crafted specialized Construction Finance solutions to address the unique financial challenges of the industry. Our commitment is to empower your firm with the financial resources needed to bring your projects to fruition."
                    />

                    <SectionHeading
                        title="Key Advantages:"
                        description={
                            <ul sx={styles.advantagesList}>
                                <li>
                                    <strong>Expertise in the Construction Industry:</strong> Benefit from over 13 years of specialized experience in the construction sector with Capflow Consulting LLP. Our seasoned team of experts possesses in-depth knowledge and insights, ensuring that we navigate the intricacies of construction finance with precision. Count on tailored solutions that align seamlessly with your specific needs.
                                </li>
                                {/* Add more li elements for other advantages */}
                            </ul>
                        }
                    />

                    <SectionHeading
                        title="Industries We Serve:"
                        description={
                            <ul sx={styles.industriesList}>
                                <li>Residential Construction</li>
                                <li>Commercial Construction</li>
                                <li>Infrastructure Development</li>
                                <li>Specialty Construction Projects</li>
                            </ul>
                        }
                    />

                    <SectionHeading
                        title="Why Choose Capflow Consulting LLP?"
                        description={
                            <ul sx={styles.reasonsList}>
                                <li>
                                    <strong>Industry Expertise:</strong> Leverage our industry expertise to gain insights into market trends and construction financing strategies.
                                </li>
                                {/* Add more li elements for other reasons */}
                            </ul>
                        }
                    />
                </Container>
            </Layout>
        </ThemeProvider>
    );
};

export default ConstructionFinanceSection;


const SectionHeading = ({ title, description, ...props }) => {
    return (
        <Box sx={styles.heading} {...props}>
            <Heading sx={{...styles.title, mb:4}}>{title}</Heading>
            <Text as="p" sx={styles.description}>
                {description}
            </Text>
        </Box>
    );
};

const styles = {
    hero: {
        backgroundImage: 'url("https://cdn.dribbble.com/userupload/9954965/file/original-24dd0d01d231ead3dc20b5a1be1c3297.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // py: ['7rem', '1.25rem'],
        minHeight: ['400px', '500px', '500px', '460px'], // Adjust the values based on your design needs
    },
    heroContent: {
        maxWidth: '800px',
        pt: ['7rem', null, null, 16],

        // mx: 'auto',
        // textAlign: 'center',

    },
    container: {
        bg: 'gray.100',
        py: 8,
        px: [3, null, null, 4],
    },
    advantagesList: {
        listStyleType: 'disc',
        listStylePosition: 'inside',
        margin: '0',
        padding: '0',
    },
    industriesList: {
        listStyleType: 'disc',
        listStylePosition: 'inside',
        margin: '0',
        padding: '0',
    },
    reasonsList: {
        listStyleType: 'disc',
        listStylePosition: 'inside',
        margin: '0',
        padding: '0',
    },
    title: {
        fontFamily: 'heading',
        fontWeight: 700,
        fontSize: [5, null, null, 26, null, 30, 9],
        lineHeight: [1.33, 1.33, 1.48],
        letterSpacing: ['-0.5px', null, null, null, null, null, '-1px'],
        img: {
            ml: ['15px'],
            position: 'relative',
            top: '8px',
        },
    },
    heroTitle: {
        fontFamily: 'heading',
        fontWeight: 700,
        fontSize: [5, null, null, 26, null, 30, 9],
        lineHeight: [1.33, 1.33, 1.48],
        letterSpacing: ['-0.5px', null, null, null, null, null, '-1px'],
        color: 'inherit', // You can set the color you want
        img: {
            ml: ['15px'],
            position: 'relative',
            top: '8px',
        },
    },
    // Define the hero subtitle variant
    heroSubtitle: {
        color: 'inherit', // You can set the color you want
        fontSize: [1, null, null, 2],
        lineHeight: [1.58, 1.58, 1.58, 2.2],
        // maxWidth: ['none', 'none', 'none', 'none', 490],
        // margin: '15px auto 0',
        mt: [3, 'none', 'none', 'none', 6],
    },
};

