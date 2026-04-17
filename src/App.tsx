
import Title from './components/title'
import DataList from './components/domLists'
import { Typography } from "@mui/material";


function App() {
  
  return (
    <>
      <main className='grid grid-cols-1 justify-center gap-2 md:grid-cols-[minmax(450px,500px)]
      lg:grid-cols-[minmax(575px,625px)]'>
        <Title />

        <Typography variant="h6" component="h6" style={{textAlign:'center',color:'#cd2a5e',fontSize:'19px'}}>
          10,000 items rendering
        </Typography>

        <div className=''>
          <DataList />
        </div>
      </main>
    </>
  );
}

export default App;
