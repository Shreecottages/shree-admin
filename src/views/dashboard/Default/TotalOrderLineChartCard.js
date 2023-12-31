import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Grid, Typography, LinearProgress } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
// third-party
// import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/EarningCard';

// import ChartDataMonth from './chart-data/total-order-month-line-chart';
// import ChartDataYear from './chart-data/total-order-year-line-chart';

// assets
// import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const TotalOrderLineChartCard = ({ isLoading }) => {
  const theme = useTheme();

  // const [timeValue, setTimeValue] = useState(false);
  // const handleChangeTime = (event, newValue) => {
  //   setTimeValue(newValue);
  // };
  const img = 14;

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 3.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container sx={{mb: '20px'}}>
                  <Grid item sx={{zIndex: 1}}>
                    <Typography variant='h3' sx={{color:"common.white"}}>Total Images</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems="center" justifyContent="space-between" sx={{width:"100%"}}>
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500}}>{img}</Typography>
                  </Grid>
                  <Grid item>
                    <Button variant='contained' sx={{
                        backgroundColor: theme.palette.primary[200],
                        color: theme.palette.primary.dark,
                        zIndex: 1,
                        ':hover':{
                          backgroundColor: theme.palette.primary.dark,
                          color: 'common.white'
                        }
                      }}><ArrowForward /></Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{mt:"15px"}}>
                  <LinearProgress variant="determinate" value={img>=100?100:img} sx={{
                    color: theme.palette.primary.dark,
                    // padding:"1px",
                    height: '7px',
                    borderRadius:"4px",
                    zIndex: 1,
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: theme.palette.primary[800]
                    }
                  }} />
              </Grid>
              {/* <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item>
                    <Avatar
                      variant="rounded"
                      sx={{
                        ...theme.typography.commonAvatar,
                        ...theme.typography.largeAvatar,
                        backgroundColor: theme.palette.primary[800],
                        color: '#fff',
                        mt: 1
                      }}
                    >
                      <LocalMallOutlinedIcon fontSize="inherit" />
                    </Avatar>
                  </Grid>
                </Grid>
              </Grid> */}
              {/* <Grid item sx={{ mb: 0.75 }}>
                <Grid container alignItems="center" justifyContent="space-between" sx={{width:"100%"}}>
                  <Grid item>
                    <Grid container alignItems="center">
                    
                    
                      <Grid item>
                        {timeValue ? (
                          <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>$108</Typography>
                        ) : (
                          <Typography sx={{ fontSize: '2.125rem', fontWeight: 500, mr: 1, mt: 1.75, mb: 0.75 }}>$961</Typography>
                        )}
                      </Grid>
                      <Grid item>
                        <Avatar
                          sx={{
                            ...theme.typography.smallAvatar,
                            cursor: 'pointer',
                            backgroundColor: theme.palette.primary[200],
                            color: theme.palette.primary.dark
                          }}
                        >
                          <ArrowDownwardIcon fontSize="inherit" sx={{ transform: 'rotate3d(1, 1, 1, 45deg)' }} />
                        </Avatar>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: '1rem',
                            fontWeight: 500,
                            color: theme.palette.primary[200]
                          }}
                        >
                          Total Order
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    {timeValue ? <Chart {...ChartDataMonth} /> : <Chart {...ChartDataYear} />}
                  </Grid>
                </Grid>
              </Grid> */}
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

TotalOrderLineChartCard.propTypes = {
  isLoading: PropTypes.bool
};

export default TotalOrderLineChartCard;
