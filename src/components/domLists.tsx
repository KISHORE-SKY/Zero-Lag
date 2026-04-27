
import { useMemo, useState, useEffect } from "react";
import { type ListItem , generateDatas} from "./data.ts";


function DataList(){

    //reciever of the listitems 
    const listDatas:ListItem[] = useMemo(()=>{

        //total count of list items
        return generateDatas(10000); 
    },[]);

    //list item height
    const itemHeight:number = 30;
    //count list vissible
    const visibleCount:number = 12;
    const boxHeight:number = 385;
    //observe the scrollTop
    const [scrolling,setScrolling]=useState<number>(0);
  
    //toggle logic of request animation frame
    const [ticking,setTicking]=useState<boolean>(false);

    const [vissibleItems,setVissibleItems] = useState<ListItem[]>([]);
    const [startIndex,setStartIndex] = useState<number>(0);
    const [endIndex,setEndIndex] = useState<number>(0);
    const [offset,setOffSet] = useState<number>(0);

    
    function scrollHandler(event: React.UIEvent<HTMLDivElement>){
        const scrollTop = event.currentTarget.scrollTop;
        setScrolling(scrollTop);
        console.log(scrollTop);
        
    }

    
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(!ticking){
                requestAnimationFrame(()=>{
                    setStartIndex(Math.max(0,Math.floor(scrolling/visibleCount)-2));
                    setEndIndex(startIndex + Math.ceil(boxHeight/itemHeight));
                    setVissibleItems(listDatas.slice(startIndex,endIndex+2));
                    setOffSet(startIndex*itemHeight);
                    setTicking(false);
                });
            setTicking(true);
            }
        })
    },[startIndex,endIndex,vissibleItems,offset,ticking]);
        

    

    return(
        <>
            <div className='grid justify-center grid-cols-1 items-center w-full h-[385px] 
            overflow-y-auto [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-thumb]:h-[60px]
            [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-track]:bg-[#e8e8e8]
            [&::-webkit-scrollbar-thumb]:bg-[#fc0b58] relative ' onScroll={scrollHandler}>

                
                    <div className={`flex flex-col items-center justify-center absolute top-0 left-0 
                    w-full `} >

                        {vissibleItems.map((item)=>(
                            <div key={item.id} className={`bg-[#c7c7c7] w-full text-center text-md 
                            h-[30px] mb-[6px] `} >
                                List item - {item.data}  
                            </div>
                        ))
                        }
                        
                    </div>
                </div>
            <div/>
            
        </>
    );


}


export default DataList;