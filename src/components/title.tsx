import { Typography } from "@mui/material";

function Title(){

    return(
        <>
            <div className="text-center">
                <Typography variant="h1" component="h1"
                sx={{fontSize:'25px',color:'#000',fontWeight:'bold'}}>Virtual Scroll List</Typography>
            </div>
        </>
    );
}

export default Title;