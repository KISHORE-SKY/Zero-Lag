
import { useEffect, useRef, useState,useMemo } from 'react';
import { generateDatas ,type ListItem } from './data'

//usememo hook


function DataList(){

    const data: ListItem[]=useMemo(()=>{
       return generateDatas(10000)
    },[])

    const [scrolling,setScrolling]=useState<number>(0);

    const itemHeight:number=30;
    const boxHeight:number=385;

    function handleScroll(event:React.UIEvent<HTMLElement>){
      setScrolling(event.currentTarget.scrollTop); 
      console.log(event.currentTarget.scrollTop);
       
    }

    let startIndex:number = Math.max(0, Math.floor(scrolling / itemHeight) - 2);
    let endIndex:number = startIndex + Math.ceil(boxHeight / itemHeight);
    const visibleList = data.slice(startIndex, endIndex + 2);
    let offset = startIndex * itemHeight;
    
    const lastRef = useRef<HTMLDivElement | null>(null);

    useEffect(()=>{

        if(!lastRef?.current) return;

           const observer = new IntersectionObserver((entries)=>{
            console.log(entries);
            const entry = entries[0];
            
                if(entry.isIntersecting){
                   console.log(`loading more`);
                }
            },{
                threshold:0.5
            })
            observer.observe(lastRef?.current);

            return observer.disconnect();
        },[visibleList])               
        
        
    

    return(
        <>
            <div className='grid justify-center grid-cols-1 items-center w-full h-[385px] 
            overflow-y-auto [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-thumb]:h-[60px]
            [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-track]:bg-[#e8e8e8]
            [&::-webkit-scrollbar-thumb]:bg-[#fc0b58] relative ' onScroll={handleScroll}>

                <div style={{ height: `${data.length * 30}px` }} />
                    <div className={`flex flex-col items-center justify-center absolute top-0 left-0 
                    w-full `} style={{ transform: `translateY(${offset}px)` }}>

                        {visibleList.map((item,index)=>(
                            
                            <div key={item.id} className={`bg-[#c7c7c7] w-full text-center text-md 
                            h-[30px] mb-[6px] `} ref={index === visibleList.length-1 ? lastRef : null }>
                                List item - {item.data}  
                            </div>
                        ))}
                    </div>
                </div>
            
        </>
    );


}


export default DataList;