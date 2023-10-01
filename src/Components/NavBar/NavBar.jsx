import { ButtonNavBar } from "./ButtonNavBar";
import { ButtonProfile } from "./ButtonProfile";
import { Logo } from "./Logo";

 function NavBar(){
    return(
        <div className="w-full h-7 colorBackCyan flex justify-start items-center">
            <Logo/>
            <nav className="flex gap-3 ml-3">
                <><ButtonNavBar name="HOME"/></>
                <><ButtonNavBar name="GIOCA"/></>
                <><ButtonNavBar name="NOVITA'"/></>
                <><ButtonNavBar name="CONTATTACI"/></>
            </nav>
            <ButtonProfile/>
        </div>
    )
}

export default NavBar