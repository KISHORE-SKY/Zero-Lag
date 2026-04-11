import { useState, type ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
    const [searchInput,setSearchInput]=useState<string>('');
    const [showList,setShowList]=useState<boolean>(false);

    function searchHandler(event:ChangeEvent<HTMLInputElement>){
        setSearchInput(event.target.value);
        console.log(event.target.value);
    }
    function showingList(){
        if(!showList){
            setShowList(true);
        }
        else{
            setShowList(false);
        }
    }

    return(
        <>
            <div className={`flex items-center flex-col gap-2 rounded-lg bg-[#cfcfcf] overflow-hidden 
            transition-all duration-300 ${showList ? "h-[240px]" : "h-[40px]"}`}>

                <div className="flex items-center justify-center">
                    <div className=" h-[35px] w-[225px] bg-[#cfcfcf] text-[#020026] rounded-lg p-[5px] px-[9px] 
                    flex items-center sm:w-[325px] md:w-[350px] ">
                        <input type='text' placeholder='search here' value={searchInput} 
                        onChange={searchHandler} id='inputsearch' name="inputsearch"
                        className="border-none outline-none bg-[#cfcfcf] text-[#020026] h-[30px] w-[200px]
                        px-1 placeholder-[#020026] sm:w-[300px] md:w-[325px] " 
                        onClick={showingList}/>
                        <label htmlFor="inputsearch">
                            <FaSearch className="cursor-pointer text-md"  />
                        </label>
                    </div>

                </div>

                {showList && <div className="gap-1 flex flex-col items-center">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>}

            </div>

        </>
    );
}

export default Search;