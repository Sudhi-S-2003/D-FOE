import Left from "../components/Left/Left"
import Right from "../components/Right/Right"
import Header from "../components/Header"
import { FormDataProvider } from "@/context/FormDataContext"
function HomePage() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row bg-slate-600  p-3  h-[95vh] overflow-y-auto">
        <FormDataProvider>
          <Left />
          <Right />
        </FormDataProvider>
      </div>
    </div>

  )
}

export default HomePage