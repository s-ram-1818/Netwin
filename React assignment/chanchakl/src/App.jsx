
import './App.css'
import Header from './components/Header'
import Login from './components/Login'
import LanguageProvider  from './context/LanguageContext'
import UserProvider from './context/UserContext'

function App() {
 

  return (
    <div>
     <LanguageProvider>
       <UserProvider>
        <Header/>
        <Login/>
      </UserProvider>
     </LanguageProvider>
    </div>
  )
}

export default App
