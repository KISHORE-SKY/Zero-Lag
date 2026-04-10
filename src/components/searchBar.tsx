import { useState, type ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
    
    const [searchInput,setSearchInput]=useState<string>('');

    function searchHandler(event:ChangeEvent<HTMLInputElement>){
        setSearchInput(event.target.value);
        console.log(event.target.value);
        
    }

    return(
        <>
            <div className="flex items-center justify-center">
                <div className=" h-auto w-[225px] bg-[#cfcfcf] text-[#020026] rounded-lg p-[6px] flex items-center
                sm:w-[325px] md:w-[350px] ">
                    <input type='text' placeholder='search here' value={searchInput} 
                    onChange={searchHandler} id='inputsearch' name="inputsearch"
                    className="border-none outline-none bg-[#cfcfcf] text-[#020026] h-[30px] w-[200px]
                    px-1 placeholder-[#020026] cursor-pointer sm:w-[300px] md:w-[325px] "/>
                    <label htmlFor="inputsearch">
                        <FaSearch className="cursor-pointer text-md"  />
                    </label>
                </div>
            </div>
        </>
    );
}

export default Search;