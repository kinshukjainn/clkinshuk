import {Routes , Route , Navigate} from "react-router-dom";
import { SignedOut } from "@clerk/clerk-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Newsignin from "./components/Newsignin";
import Blogs from "./components/Blogs";
import Protectedroute from "./Protectedroute";
import Devtools from "./components/Devtools";
import Sources from "./components/Sources";



export default function App() { 

  return(
    <>
    <Header />

    
    <Routes>
      // open routes : not protected by auth : 
      <Route path="/" element={<Home/>} />
      <Route path="/gears" element={<Devtools/>} />

      <Route path ="/sign-in" element ={
        <SignedOut>
          <Newsignin/>
        </SignedOut>
      }
      />
      <Route path="/sources"
      element ={ 
        <Protectedroute>
          <Sources />
        </Protectedroute>
      }
      />
      
      <Route path="/blogs"
      element ={ 
        <Protectedroute>
          <Blogs />
        </Protectedroute>
      }
      />

      <Route path ="*" element={
        <Navigate to ="/" replace />
      }/>
    </Routes>
    <Footer/>
    </>
  )
}