// imporiamo header nav 
import HeaderNav from "./HeaderNav";

// Contenuto Header

export default function Header(){
    return(
        <header>
            <div className="container">
                <figure>
                    <img src="./img/dc-logo.png" alt="" />
                </figure>

                <HeaderNav/>
               
            </div>
        </header>
    );
}