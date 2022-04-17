import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#fff',
        }
    }),
);

function Header() {
    const [value, setVal] = React.useState(0);

    const handleChange = (event, newValue) => {
        setVal(newValue);
    };

    return (
        <Box sx={{ bgcolor: '#433E3E', display: 'flex', justifyContent: 'space-between' }}>
            <StyledTabs
                value={value}
                onChange={handleChange}
            >
                <StyledTab label="Dashboard" />
            </StyledTabs>
            <StyledTabs
                value={value}
                onChange={handleChange}
            >
                <StyledTab label="My Bookings" />
                <StyledTab label="Cart" />
                <StyledTab label="Logout" />
            </StyledTabs>
        </Box>
    );
}

export default Header