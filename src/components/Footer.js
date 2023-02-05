import React, { useState } from "react";

const styles = {
    footerStyle: {
        borderWidth: 0,
    },
  };
  
function Footer() {
    return(
        <footer className="footer">
        <p>
        <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
            <img alt="Creative Commons License" style={styles.footerStyle} src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>
            <br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
        </p>
    </footer>
    );
}
export default Footer;