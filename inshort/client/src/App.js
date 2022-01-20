
import Header from './components/Header';
import InfoHeader from './components/InfoHeader';
import Article from './components/Article';

import { Box, makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme=>({
  container:{
    marginTop:110,
    width:"59%",
    margin:"0 auto",
    [theme.breakpoints.down("md")]:{
      width:"75%",
    },
    [theme.breakpoints.down("sm")]:{
      width:"85%",
    }
  }
}));

function App() {

  const classes = useStyle();

  return (
    <Box>
      <Header/>
      <Box className={classes.container}>
        <InfoHeader/>
        <Article/>
      </Box>
    </Box>
  );
}

export default App;
