import PropTypes from 'prop-types';
// import { useState } from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Button, Grid, Typography, LinearProgress } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import { ArrowForward } from '@mui/icons-material';


const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.dark,
  color: '#fff',
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: '50%',
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
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
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

// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const EarningCard = ({ isLoading }) => {
  const theme = useTheme();
  const cont = 345;
  // const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
      {isLoading ? (
        <SkeletonEarningCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 3.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container sx={{mb: '20px'}}>
                  <Grid item sx={{zIndex: 1}}>
                    <Typography variant='h3' sx={{color:"common.white"}}>Total Contact Us queries</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems="center" justifyContent="space-between" sx={{width:"100%"}}>
                  <Grid item>
                    <Typography sx={{ fontSize: '2.125rem', fontWeight: 500}}>{cont}</Typography>
                  </Grid>
                  <Grid item>
                    <Button variant='contained' sx={{
                        backgroundColor: theme.palette.secondary[200],
                        color: theme.palette.secondary.dark,
                        zIndex: 1,
                        ':hover':{
                          backgroundColor: theme.palette.secondary.dark,
                          color: 'common.white'
                        }
                      }}><ArrowForward /></Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{mt:"15px"}}>
                  <LinearProgress variant="determinate" value={cont>=100?100:cont} sx={{
                    color: theme.palette.secondary.dark,
                    backgroundColor: theme.palette.secondary[200],
                    height: '7px',
                    // padding:"1px",
                    borderRadius:"4px",
                    zIndex: 1,
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: theme.palette.secondary[800]
                    }
                  }} />
              </Grid>
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

EarningCard.propTypes = {
  isLoading: PropTypes.bool
};

export default EarningCard;
