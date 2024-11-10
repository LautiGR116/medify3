import CustomCircularProgress from "./CircularProgress";
import ToogleButton from "../../common/ToggleButton";

interface ProgressFrameProps {
  text: string;
  progress: number;
  tag: string;
  subtag: string;
}

const ProgressFrame = ({ text,progress, tag, subtag }: ProgressFrameProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-header h-progressFrame bg-scale-100">
      <CustomCircularProgress text={text} progress={progress} />
      <span className="font-sans font-bold text-title2 text-scale-1000 text-center">{tag}</span>
      <span className="font-sans text-body text-scale-600 text-center mb-3">{subtag}</span>
    </div>
  );
};

const SwitchButtons = (badge: boolean) => {
  const [isBadge, setIsBadge] = useState(badge);
  return (
    <div>
      <button className=""/>
      <button className=""/>
    </div>
  ) 
}


export default ProgressFrame;
