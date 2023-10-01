/* puoi importare anche solo questo ,il rsto è tutto qui dentro */

import Domanda from "./Domanda";
import Risposte from "./Risposte";
import ContextScore from "./ContextScore"
import { useState } from "react";
function RiquadroDomande() {
  /* imposto uno state che poi verrai inviato al context */
  const [score,setScore] = useState(0);
  const updateScore=(currScore)=>{
    setScore(currScore)
  }
  return (
    <ContextScore.Provider value={{score,updateScore}}>
    <div className="w-1/3 h-1/5 bg-slate-200 border-solid border-2 border-gray-950 rounded-xl">
      {/* La domanda è una semplice stringa */}
      <Domanda question="è vero che non so cosa scrivere?" />
      {/* N.B. Le risposte devono essere formate come in basso */}
      <Risposte
        risposte={[
          { text: "bho",correct: false},
          { text: "forse", correct: false },
          { text: "si", correct: true },
          { text: "no", correct: false },
        ]}
      />
      <h1 className="w-full text-center text-xl pixelFont font-bold">{score}</h1>
    </div>
    </ContextScore.Provider>
  );
}

export default RiquadroDomande;
