import { useEffect } from "react";
import { useState } from "react";


function DomLists() {
    
    interface listDatas{
        id:number,
        data:number
    }

    const [datas,setDatas]=useState<listDatas[]>([]);
    const [error,setError]=useState<string>('');
    const [loading,setLoading]=useState<boolean>(false);
    //const [text,setText]=useState<string>('')

    async function FetchingLists(){
        //const dataFileUrl:string=;

        try{
            const response=await fetch(`/datas/datas.json`)
            if(!response.ok){
                throw new Error(`couldn't fetch data ${response.status}`)
            }
            
            const result=await response.json();
            setDatas(result);
            
            console.log(result);
        }
        catch(error){
            setError(`can't get datas`);
            console.log(error);
        }
    }

    useEffect(()=>{
        FetchingLists();
    },[])

    return(
        <>
            <section className="h-auto flex flex-col items-center gap-2 w-full justify-center ">
                {datas.map((item)=>(
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