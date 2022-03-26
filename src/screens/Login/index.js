import React from 'react';
import Header from "../../components/Header";
import assets from "../../helpers/assets";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Login = ()=> {
    return (
        <div className="bg-[#121829] h-[100vh] text-white">
            <Header />

            <div className="w-5/6  flex items-center justify-center">
                <div className=" h-full place-items-center grid grid-cols-[1fr_1fr]">
                    <div className="fake-user bg-[#11263D] m-12">
                        <img src={assets.fakeUser} alt="fake user"/>    
                    </div>   


                    <div className="login-box">

                        <div className="flex flex-col">
                            <h1 className="text-[#C3C8D4] font-extrabold text-5xl">Login</h1>

                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={values => {
                                    // same shape as initial values
                                    console.log(values);
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className=" mt-8">
                                            <Field  
                                                name="email" 
                                                placeholder="Email"
                                                className="p-2 text-[#3A4259] rounded-lg border-2 bg-[#121829] border-[#11263D] w-80" />
                                            {errors.firstName && touched.firstName ? (
                                                <div className="text-red-600">{errors.email}</div>
                                            ) : null}
                                        </div>

                                        <div className=" mt-8">
                                            <Field  
                                                name="password" 
                                                placeholder="Password"
                                                className="p-2 text-[#3A4259] rounded-lg border-2 bg-[#121829] border-[#11263D] w-80" />
                                            {errors.firstName && touched.firstName ? (
                                                <div className="text-red-600">{errors.password}</div>
                                            ) : null}
                                        </div>

                                       

                                        <div className="w-80 text-[#C3C8D4] mt-6">
                                            <button className=" w-full bg-[#7B6EF6] p-2 rounded-lg border-2 border-[#11263D] text-center" type="submit">Submit</button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

    )
};

export default Login;
