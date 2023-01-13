import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';


interface Props {
    data: {
        "id": number,
        "location": string,
        "emailaddress": string,
        "phone": number
    }
}


const ContactCard = ({data}:Props) => {

    const onMessageSent = async(values) => {

       await fetch('http://localhost:1337/api/contact-details/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({data: values})
        }).then(() => {
            toast("sucess");
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <>
        <ToastContainer />
            <div className="contact-card">
                <div className="infos col-xs-4">
                    <h6 className="section-subtitle">Get Here</h6>
                    <h6 className="section-title mb-4">Contact Us</h6>

                    <div className="item">
                        <i className="ti-location-pin"></i>
                        <div className="">
                            <h5>Location</h5>
                            <p> {data.location}</p>
                        </div>                          
                    </div>
                    <div className="item">
                        <i className="ti-mobile"></i>
                        <div>
                            <h5>Phone Number</h5>
                            <p>{data.phone}</p>
                        </div>                          
                    </div>
                    <div className="item">
                        <i className="ti-email"></i>
                        <div className="mb-0">
                            <h5>Email Address</h5>
                            <p>{data.emailaddress}</p>
                        </div>
                    </div>
                    <div className="item">
                        <i className="ti-world"></i>
                        <div className="mb-0">
                            <h5>example.com</h5>
                            <p>{data.emailaddress}</p>
                        </div>
                    </div>
                </div>
                <div className="form col-xs-8">
                    <h6 className="section-subtitle">Available 24/7</h6>
                    <h6 className="section-title mb-4">Get In Touch</h6>
                    <Formik
                        initialValues={{ email: '',message:''}}
                        validationSchema={SignupSchema}
                        onSubmit={async(values,{resetForm}) => {
                          await onMessageSent(values)
                          resetForm()
                        }}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                        }) => (
                        <form onSubmit={(e) => handleSubmit(e)} >
                            <div className="form-group">
                                <input type="email" name="email" onChange={handleChange} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={values.email}/>
                            </div>
                            {errors.email}
                            <div className="form-group">
                                <textarea name="message" onChange={handleChange} id="" cols={30} rows={7} className="form-control form-control-lg" placeholder="Message" value={values.message}></textarea>
                            </div>
                            {errors.message}

                            <button type="submit" className="btn btn-primary btn-block btn-lg mt-3">Send Message</button>
                        </form>
                        )}
                        </Formik>

                </div>
            </div>
        
        </>
    )
}

export default ContactCard

const SignupSchema = Yup.object().shape({
    message: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });