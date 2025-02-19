import FooterLinks from "./FooterLinks"
export default function Footer(props) {
    const { linkFooter1, linkFooter2, linkFooter3, linkFooter4 } = props;
    return (
        <footer>
            <div className="up-container-footer">

                <div className="sub-container-footer center-container">
                    
                    <div>
                        <FooterLinks linkCategory={linkFooter1} />
                        <FooterLinks linkCategory={linkFooter2} />
                    </div>

                    <div>
                        <FooterLinks linkCategory={linkFooter3} />
                    </div>

                    <div>                       
                        <FooterLinks linkCategory={linkFooter4} />                                             
                    </div>
                    <div className="image-container">
                        <img src="../public/img/dc-logo-bg.png" alt="logo" />
                    </div>
                </div>
            </div>

            <div className="down-container-footer">
                <div className="center-container content-footer">
                    <div className="sing-up-button">
                        SING-UP NOW!
                    </div>
                    <div className="social-content">
                        <span className="follow-us">FOLLOW US</span>
                        <img src="./img/footer-facebook.png" alt="" />
                        <img src="./img/footer-twitter.png" alt="" />
                        <img src="./img/footer-youtube.png" alt="" />
                        <img src="./img/footer-pinterest.png" alt="" />
                        <img src="./img/footer-periscope.png" alt="" />
                    </div>

                </div>

            </div>
        </footer>
    )
}