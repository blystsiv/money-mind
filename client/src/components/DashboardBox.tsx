import styled from '@emotion/styled';
import { Box } from '@mui/material';

const DashboardBox = styled(Box)(({ theme }) => ({
  borderRadius: '1rem',
  boxShadow: '0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)',
  backgroundColor: theme.palette.background.light,
}));

export default DashboardBox;
