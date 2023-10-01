import "./styleNavbarAndRiquadro.css"
export function ButtonNavBar(props){
    return(
        <div>
            <h2 className="colorTextYellow pixelFont ombra font-bold drop-shadow-xl cursor-pointer">{props.name}</h2>
        </div>
    )
}