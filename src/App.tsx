import Search from './components/searchBar'
import Title from './components/title'
import DomLists from './components/domLists';
import { useState,useEffect } from 'react';


export interface DataList{
    id:number,
    data:number
  }

function App() {

  const [search,setSearch]=useState<string>("");
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

  
    const filterLists=data.filter(item=>item.data.toString().includes(search));
   
  
  return (
    <>
      <main className='grid grid-cols-1 justify-center gap-2 p-3 '>
        <Title />
        <div className='flex justify-center'>
          <Search onSearch={setSearch} />
        </div>
        <div className='mt-8'>
          <DomLists lists={filterLists} />
        </div>
      </main>
    </>
  );
}

export default App;
