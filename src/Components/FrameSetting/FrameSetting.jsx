import { useState } from "react";
import './frameSetting.css'
function FrameSetting() {

  const [volume, setVolume] = useState(50);
  const [effettiSonori, setEffettiSonori] = useState(50);
  const [notifiche, setNotifiche] = useState(false);

  return (
    <div className="borderImage flex flex-col relative w-2/3 ">
      <div className="fillBorder  h-48 flex flex-col items-start sfondoFrame">
        <div className="flex w-5/6 flex-row justify-between sfondoFrame">
          <label htmlFor="volume" className="text-red-500 w-1/3 ">
            Volume Musica
          </label>
          <div className="flex gap-2">
            <input
              type="range"
              min="0"
              max="100"
              name="volume"
              className="h-8 rangeBarra"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
            <output id="rangevalue">{volume}</output>
          </div>
        </div>
        <div className="flex w-5/6 flex-row justify-between sfondoFrame">
          <label htmlFor="volume" className="text-red-500 w-1/3">
            Effetti Sonori
          </label>
          <div className="flex gap-2">
            <input
              type="range"
              min="0"
              max="100"
              className="rangeBarra h-8"
              value={effettiSonori}
              onChange={(e) => setEffettiSonori(e.target.value)}
            />
            <output id="rangevalue2">{effettiSonori}</output>
          </div>
        </div>
        <div className="flex flex-row gap-2 w-5/6">
          <h3 className="text-red-500 ">Seguici sulla nostra community</h3>
          <img src="./src/assets/image/discord.png" className="w-6" />
        </div>
        <div className="flex flex-row gap-2 w-5/6">
          <h3 className="text-red-500 ">Notifiche</h3>
          <input
            type="checkbox"
            name="notifiche"
            value={notifiche}
            onClick={() => setNotifiche((prev) => !prev)}
          />
        </div>
        <h3 className="text-red-500 ">Resetta il tuo Account</h3>
        <h3 className="text-red-500 ">Crediti</h3>
      </div>
      <h1 className="absolute pixelFont font-bold titolFrame self-center">
        Impostazioni
      </h1>
    </div>
  );
}

export default FrameSetting;
