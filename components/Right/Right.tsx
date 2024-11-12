"use client"
import Form from "../Form/Form"
import { getFormData} from "@/context/FormDataContext"; 
import Forminterface from "@/data/Forminterface";
function Right() {
  const formData:Forminterface = getFormData();  
  return (
    <div className="w-[50%] m-2 p-3">
      <Form formdata={formData}/>
    </div>
  )
}

export default Right