import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tab1 from './tabs/Tab1';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    width: '100%',
    marginTop:100,
  },
  tabs: {
    // borderRight: `0px solid ${theme.palette.divider}`,
    width:500,
    marginLeft:80,
  },
  label:{
      fontWeight:"bold",
  },
}));

export default function ProfileTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="FullWidth"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        textColor="secondary"
        indicatorColor="#fff"
      >
        <Tab className={classes.label} label="LOVE AND RELATIONSHIP" {...a11yProps(0)} />
        <Tab className={classes.label} label="VEDIC ASTROLOGY" {...a11yProps(1)} />
        <Tab className={classes.label} label="MEDICAL ASTROLOGY" {...a11yProps(2)} />
        <Tab className={classes.label} label="MEDICAL ASTROLOGY" {...a11yProps(2)} />
        <Tab className={classes.label} label="CAREER ASTROLOGY" {...a11yProps(3)} />
        <Tab className={classes.label} label="ASTROLOGY REPORTS 2020" {...a11yProps(4)} />
        <Tab className={classes.label} label="CORPORATE ASTROLOGY" {...a11yProps(5)} />
        <Tab className={classes.label} label="CHILD ASTROLOGY" {...a11yProps(6)} />
        <Tab className={classes.label} label="VEDIC YAGYAS" {...a11yProps(7)} />
        <Tab className={classes.label} label="BOLLYWOOD ASTROLOGY" {...a11yProps(8)} />
        <Tab className={classes.label} label="RUDRAKSHA THERAPY" {...a11yProps(9)} />
        <Tab className={classes.label} label="VEDIC MUHURATA" {...a11yProps(10)} />
        <Tab className={classes.label} label="NUMEROLOGY" {...a11yProps(11)} />
        <Tab className={classes.label} label="STOCK MARKET ASTROLOGY" {...a11yProps(12)} />
        <Tab className={classes.label} label="TAROT" {...a11yProps(13)} />
        <Tab className={classes.label} label="VASTU AND FENGSHUI" {...a11yProps(14)} />
        <Tab className={classes.label} label="COUNSELLING" {...a11yProps(15)} />
        <Tab className={classes.label} label="CHAKRA HEALING" {...a11yProps(16)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Tab1/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Tab1/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Tab1/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Tab1/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <Tab1/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Tab1/>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <Tab1/>
      </TabPanel>
    </div>
  );
}