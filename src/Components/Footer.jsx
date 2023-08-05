import '../Styles/Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__project-column">
                <img src="./public/[PLACEHOLDER LOGO].png" alt="logo1" className="small-logo"/>
                <label className="footer__project-2">PROJECT</label>
            </div>
            <p className="direction_column">
                <span>123 Street</span>
                <span>Anytown, USA 12345</span>
                <span>hello@website.com</span>
            </p>
            <span className="rights_column">© 2021 Project. All rights reserved</span>
        </footer>
    );
}

export default Footer;
