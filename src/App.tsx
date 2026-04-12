import Search from './components/searchBar'
import Title from './components/title'
import DomLists from './components/domLists';

function App() {
  
  return (
    <>
      <main className='grid grid-cols-1 justify-center gap-2 p-3 '>
        <Title />
        <div className='flex justify-center'>
          <Search />
        </div>
        <div className='mt-8'>
          <DomLists />
        </div>
      </main>
    </>
  );
}

export default App;
