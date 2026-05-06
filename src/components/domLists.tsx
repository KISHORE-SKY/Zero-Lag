
import { useMemo, useState, useRef} from "react";
import { type ListItem , generateDatas} from "./data.ts";


function DataList(){
 
    const listDatas:ListItem[] = useMemo(()=>{
        //total count of list items
        return generateDatas(100000); 
    },[]);

    //list item and Box div height
    const itemHeight:number = 30;
    const boxHeight:number = 385;

    //observe the scrollTop
    const [scrolling,setScrolling]=useState<number>(0);
    const lastItemRef = useRef<number>(0);
    const isRunningRef = useRef(false);

    function scrollHandler(event: React.UIEvent<HTMLDivElement>){

        const scrollTop = event.currentTarget.scrollTop;
        console.log(scrollTop);
        // setScrolling(scrollTop);
        lastItemRef.current = scrollTop;
        if(isRunningRef.current) return;

        isRunningRef.current = true;

        requestAnimationFrame(()=>{
            setScrolling(lastItemRef.current);

            isRunningRef.current = false;
        })
    }



    let letStart = Math.max(0,Math.floor(scrolling/itemHeight)-4);
    let letsEnds = letStart + Math.ceil(boxHeight/itemHeight);
    let offset=letStart*itemHeight;
    let vissibleItems = listDatas.slice(letStart,letsEnds+4);
    const coverBoxHeight = listDatas.length * itemHeight; 
   

    return(
        <>
            <div className='grid justify-center grid-cols-1 items-center w-full h-[385px] 
            overflow-y-auto [&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-thumb]:h-[60px]
            [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-track]:bg-[#e8e8e8]
            [&::-webkit-scrollbar-thumb]:bg-[#fc0b58] relative ' onScroll={scrollHandler} >

                <div style={{"height":`${coverBoxHeight}px`}} />

                    <div className={`flex flex-col items-center justify-center absolute top-0 left-0 
                    w-full `} >

                        
                        {vissibleItems.map((item)=>(
                            <div key={item.id} className={`bg-[#c7c7c7] w-full text-center text-md 
                            h-[30px] mb-[6px]`} style={{ transform: `translateY(${offset}px)` }} 
                            >
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