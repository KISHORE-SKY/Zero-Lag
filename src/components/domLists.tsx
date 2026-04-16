
import { generateDatas ,type ListItem } from './data'


function DataList(){
    const data: ListItem[]=generateDatas(10000)
    return(
        <>
            <div className='grid justify-center grid-cols-1 items-center gap-2 w-full h-[385px] 
            overflow-auto  '>

                {data.map((item)=>(
                    <div key={item.id} className='bg-[rgba(0,0,0,0.1)] w-full text-center text-sm'>
                       index - {item.data}  
                    </div>
                ))}
            </div>
        </>
    );


}


export default DataList;