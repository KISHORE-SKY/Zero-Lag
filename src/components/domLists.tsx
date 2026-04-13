import type { DataList } from '../App';

interface DomListProps{
    lists:DataList[]        
}

function DomLists({lists}:DomListProps) {
    
    
    return(
        <>
            <section className="h-auto flex flex-col items-center gap-2 w-full justify-center ">
                {lists.map((item)=>(
                    <div key={item.id} className="border-[1px] border-solid border-[rgba(0,0,0,0.5)] w-full flex justify-center 
                    text-lg p-2 rounded-lg font-semibold bg-[rgba(0,0,0,0.1)]">
                        {item.data}
                    </div>
                ))}                
            </section>
        </>
    );
}

export default DomLists;