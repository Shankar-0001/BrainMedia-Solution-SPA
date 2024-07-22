import { Link } from "react-router-dom";

export function Contact() {
    return (
        <div className='container-fluid shadow-2xl'>
            <h2>Connect With Us</h2>
            <div className=' d-flex justify-content-center  align-items-center p-4  row'>
                <div className='leftSide col-md-6 pe-4 tex-wrap'>
                    <div className='heading py-10 '>
                        <h1 className='font-exotrabold text-cyan-600'>Let's work together</h1>
                    </div>
                    <div>
                        <p className="fs-5 text-cyan-600">Learn more about how UST can help you design for lasting impact.</p>
                    </div>
                </div>
                <div className="p-4 rounded-2xl shadow-2xl bg-slate-300 mt-5 col-md-6 ps-4 m4 border-2 hover:bg-slate-400">
                    <h3 className="text-center fw-bold fs-2"> <span className="bi bi-chat-left-text-fill"></span> Send Message</h3>
                    <form >
                        <dl className='text-start p-2'>

                            <dt> Name </dt>
                            <dd> <input type="text" name="UserName" className="form-control" /> </dd>


                            <dt> Email </dt>
                            <dd> <input type="email" name="Email" className="form-control" /> </dd>

                            <dt> Mobile </dt>
                            <dd> <input type="text" name="Mobile" className="form-control" /> </dd>

                            <dt>Message</dt>
                            <dd><textarea name="textarea" id="#" className="form-control p-2"></textarea></dd>
                        </dl>
                        <div className="btn btn-primary hover:bg-white" >
                            <Link to='' className='text-decoration-none text-white p-3 m-2 '>Submit</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}