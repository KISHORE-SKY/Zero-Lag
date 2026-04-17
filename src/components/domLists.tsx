
import { useState } from 'react';
import { generateDatas ,type ListItem } from './data'


function DataList(){
    const data: ListItem[]=generateDatas(10000)

    const [scrolling,setScrolling]=useState<number>(0);

    const itemHeight:number=30;
    const boxHeight:number=385;

    function handleScroll(event:React.UIEvent<HTMLElement>){
      setScrolling(event.currentTarget.scrollTop); 
      console.log(event.currentTarget.scrollTop);
       
    }
    let startIndex:number = Math.max(0, Math.floor(scrolling / 30) - 2);
    let endIndex:number = startIndex + Math.ceil(boxHeight/itemHeight);
    const visibleList = data.slice(startIndex, endIndex + 2);
    let offset = startIndex * itemHeight;


    return(
        <>
            <div className='grid justify-center grid-cols-1 items-center w-full h-[385px] 
            overflow-y-auto [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-thumb]:h-[60px]
            [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-track]:bg-[#e8e8e8]
            [&::-webkit-scrollbar-thumb]:bg-[#fc0b58] relative ' onScroll={handleScroll}>

                <div style={{ height: `${data.length * 30}px` }} />
                    <div className={`flex flex-col items-center justify-center absolute top-0 left-0 
                    w-full `} style={{ transform: `translateY(${offset}px)` }}>

                        {visibleList.map((item)=>(
                            <div key={item.id} className={`bg-[#c7c7c7] w-full text-center text-md 
                            h-[30px] mb-[6px] `}>
                                List item - {item.data}  
                            </div>
                        ))}
                    </div>
                </div>
            
        </>
    );


}


export default DataList;