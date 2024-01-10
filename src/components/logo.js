/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';
import caplogo from 'assets/images/caplogo.png';
import {  Box, Container, Button, Image } from 'theme-ui';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
        <Image 
        sx={{width:55}}
        variant="avatar" src={caplogo} alt="illustration" /> 
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
