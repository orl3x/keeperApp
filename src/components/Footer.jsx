import React from "react";

function Footer(){
    let date = new Date();
    let actualYear = date.getFullYear();


    return(
        <footer>
        <p>Copyright © {actualYear}</p>
        </footer>
    );
}

export default Footer;