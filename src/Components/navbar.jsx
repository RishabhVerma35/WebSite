const blur = {

    backdropFilter: 'blur(3px)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',

}

function Navbar() {
    return (
        <nav class="navbar navbar-expand-md fixed-top py-3 mb-2 " style={blur}>
            <div class="container-fluid">
                <a class="navbar-brand text-white" href="#">
                    <img src="/images/logo.jpg" alt="" height={30} width={30} style={{ marginLeft: '50px' }} className="rounded-circle " />
                    <b>ClimeCast</b>
                </a>

                <a class="nav-link" href="#contact-us">Contact Us</a>

            </div>
        </nav>

    );
}
export default Navbar;