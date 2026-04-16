export interface ListItem{
    id:number,
    data:number
}


export function generateDatas(count:number) {
    
    return Array.from({length:count},(_,i)=>({
        id:i+1,
        data:i+1
    }))
}