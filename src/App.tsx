
import Title from './components/title'
import DomLists from './components/domLists';
import { useState,useEffect } from 'react';


export interface DataList{
    id:number,
    data:number
  }

function App() {

 
  const [data,setData]=useState<DataList[]>([]);
  const [error,setError]=useState<string>('');
  
  async function fetchingData(){
    const response = await fetch(`./datas/datas.json`)
  
    try{
      if(!response.ok){
        throw new Error(`couln't fetch datas ${response.status}`);
      }
      const result = await response.json(); 
      setData(result);
      console.log(result);
              
    }
    catch(error){
      setError(`cant't fetch datas ${error}`);
       console.log(error);
              
    }
  }
  
  useEffect(()=>{
    fetchingData();
  },[]);
   
  
  return (
    <>
      <main className='grid grid-cols-1 justify-center gap-2 p-3 '>
        <Title />
        <div className='mt-8'>
          
        </div>
      </main>
    </>
  );
}

export default App;
