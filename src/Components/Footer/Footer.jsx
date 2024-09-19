import './Footer.css'


function Footer() {
    return (<>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 py-2 text-white my-3 text-center col-sm-6">
                        <h2> LOCATION</h2>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                    <div className="col-md-4 py-2 my-3 text-white text-center col-sm-6">
                        <h2>AROUND THE WEB</h2>
                        <i className='fa-brands  fa-facebook'></i>
                        <i className='fa-brands  fa-twitter'></i>
                        <i className='fa-brands  fa-linkedin'></i>
                        <i className='fa-brands  fa-google'></i>
                    </div>
                    <div className="col-md-4 py-2 my-3 text-white text-center col-sm-6">
                        <h2>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
              
            </div>
            <div className="copyRhit"><p>Copyright © Your Website 2021</p></div>
        </footer>
    </>);
}

export default Footer;