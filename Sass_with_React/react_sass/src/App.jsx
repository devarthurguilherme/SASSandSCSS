import './sass/components/app.sass'
/*Components*/
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
function App() {

  return (
    <>
      <div id="container">
        <SideBar/>
        <MainContent />
      </div>
    </>
  )
}

export default App
