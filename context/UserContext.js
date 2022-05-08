import  {createContext} from 'react'
const AuthUserContext = createContext()

export default  ({children}) =>{
    const [user,SetUser] = useState({})
  const [isAuthentificated,setAuthenficated] = useState(false)

    return (
        <AuthUserContext.Provider  
        value={{
            user,
        SetUser,
        isAuthentificated,
        setAuthenficated
        }}
        >
            {children}
        </AuthUserContext.Provider>
    )
}

// hello world 


