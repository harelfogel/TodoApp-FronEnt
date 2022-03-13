import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Main.css';

export default function Main() {
    return (
            <Box component="main" sx={{ flexGrow: 7, p: 20 }}>
                <div className="main-headline">
                <Typography variant="h2">
                    Welcome to Atomation system
                </Typography>
                </div>
            </Box>
    );
}