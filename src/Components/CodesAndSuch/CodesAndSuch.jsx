import Header from "./Header"
import Codes from "./Codes"

export default function CodesAndSuch() {
  
  return (
    <div className="w-full">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="flex flex-wrap justify-center w-full ">
        <Codes/>
        {/* <Routes>
          <Route path="/" element={<Notes/>}/>
          <Route path="/add" element={<Add />} />
          <Route path="/note" element={<Note />} />
        </Routes> */}
      </div>
    </div>
  )
}
