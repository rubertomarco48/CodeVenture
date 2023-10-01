import { useState,useContext } from "react";
import ContextScore from "./ContextScore";
function Risposte(props) {
  const [rispostaData, setRispostaData] = useState("false");
  const [style, setStyle] = useState(["text-grey-500 pixelFont","text-grey-500 pixelFont","text-grey-500 pixelFont","text-grey-500 pixelFont"]);
  const { updateScore } = useContext(ContextScore);  
  const handleClick = (e) => {
    setRispostaData("true");
    console.log(e.target);
    if (props.risposte[e.target.name].correct) {
        setStyle([
        "text-green-500 pixelFont",
        "text-green-500 pixelFont",
        "text-green-500 pixelFont",
        "text-green-500 pixelFont",
      ]);
      updateScore(prev=>prev + 50)
    } else {
      setStyle([
        "text-red-500 pixelFont",
        "text-red-500 pixelFont",
        "text-red-500 pixelFont",
        "text-red-500 pixelFont",
      ]);
      updateScore(prev=>prev - 50)
    }
  };

  return (
    <div className="flex gap-2 p-4 flex-col">
      <div className="flex gap-3 font-bold text-xl">
        {rispostaData === "false" && (
          <input type="checkbox" name="0" id="" onChange={handleClick} />
        )}
        <label htmlFor="0" className={style[0]}>
          {props.risposte[0].text}
        </label>
      </div>
      <div className="flex gap-3 font-bold text-xl">
        {" "}
        {rispostaData === "false" && (
          <input type="checkbox" name="1" id="" onChange={handleClick} />
        )}
        <label htmlFor="1" className={style[1]}>
          {props.risposte[1].text}
        </label>
      </div>
      <div className="flex gap-3 font-bold text-xl">
        {rispostaData === "false" && (
          <input type="checkbox" name="2" id="" onChange={handleClick} />
        )}
        <label htmlFor="2" className={style[2]}>
          {props.risposte[2].text}
        </label>
      </div>
      <div className="flex gap-3 font-bold text-xl">
        {rispostaData === "false" && (
          <input type="checkbox" name="3" id="" onChange={handleClick} />
        )}
        <label htmlFor="3" className={style[3]}>
          {props.risposte[3].text}
        </label>
      </div>
    </div>
  );
}

export default Risposte;
