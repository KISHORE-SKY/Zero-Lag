import { Typography } from "@mui/material";

function Title(){

    return(
        <>
            <div className="text-center">
                <Typography variant="h1" component="h1"
                sx={{fontSize:'25px',color:'#5e0059',fontWeight:'bold'}}>Zero Lag</Typography>
            </div>
        </>
    );
}

export default Title;