
import './Contact.css'

function Contact() {
    return (<>
        <div className="contact">
            <h1 className='text-uppercase'>conatct section</h1>

            <div className="star position-relative mt-2"> ★ </div>


            <div className="form-floating w-50  mb-3">
                <input type="text" className="form-control border-bottom border-0" id="name" placeholder="Menna Shehata" />
                <label htmlFor="name">userName</label>
            </div>
            <div className="form-floating w-50 mb-3">
                <input type="number" className="form-control border-bottom border-0" id="age" placeholder="Menna Shehata" />
                <label htmlFor="age">userage</label>
            </div>
            <div className="form-floating w-50 mb-3">
                <input type="email" className="form-control border-bottom border-0" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating w-50">
                <input type="password" className="form-control border-bottom border-0" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>

            <button type="button" className="btn btn-primary btn-sm">Send Massage</button>

        </div>


    </>);
}

export default Contact;