import ButtonBox from "./ButtonBox";
import InputBox from "./InpuBox";
import OtherBox from "./OtherBox";
import TextBox from "./TextBox";
import TextColorBox from "./TextColorBox";
import BackgroundColorBox from './BackgroundColorBox';
import Preview from "./Preview";
import Placeholder from "./Placeholder";
import SubmitBtn from "./SubmitBtn";
function Left() {
  return (
    <div className="w-[50%] p-5">
      <Preview />
      <h1 className="text-lg pl-2 underline mb-2">Text</h1>
      <TextColorBox />
      <h1 className="text-lg pl-2 underline mb-2">Background</h1>
      <BackgroundColorBox />
      <h1 className="text-xl pl-5 underline underline-offset-4 mb-3">Options</h1>
      <h1 className="text-lg pl-2 underline mb-2">Label</h1>
      <TextBox />
      <h1 className="text-lg pl-2 underline mb-2">Input Box</h1>
      <InputBox />
      <h1 className="text-lg pl-2 underline mb-2">Button Box</h1>
      <ButtonBox />
      <h1 className="text-lg pl-2 underline mb-2">Other Box</h1>
      <OtherBox />
      <SubmitBtn/>
    </div>
  );
}

export default Left;
