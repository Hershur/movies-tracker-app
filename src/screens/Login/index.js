import React, { useEffect } from 'react';
import Header from "../../components/Header";
import assets from "../../helpers/assets";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import useGetSession from '../../hooks/useGetSession';
import  queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '../../redux/slices/moviesSlice';
import Cookies from 'js-cookie';



const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const Login = ()=> {

    const dispatch = useDispatch();

    const { handleSessionRequest, fetchSessionId } = useGetSession();

    const {request_token, approved} = queryString.parse(window.location.search);

    const getSession = Cookies.get('sessionId') || null; 

    
  

    useEffect(()=> {
        const loginUser = async()=> {
            try {
                if(request_token && approved && !getSession){
                    const session = await fetchSessionId(request_token);
                    console.log("session",session);
                    if(session?.session_id){
                        dispatch(setIsLoggedIn(true));
                        return window.location.replace('/');
                    }
                } 
                
            } catch (error) {
                // handleSessionLogOut();
            }
        }
        loginUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [request_token, approved])

    
    if(getSession){
        window.location.replace('/')
    }


    

    return (
        <div className="bg-[#121829] h-[100vh] text-white">
            <Header />

            <div className="w-5/6 flex items-center justify-center">
                <div className=" h-full place-items-center grid grid-cols-[1fr_1fr]">
                    <div className="fake-user bg-[#11263D] m-12">
                        <img src={assets.fakeUser} alt="fake user" loading='lazy' />    
                    </div>   


                    <div className="login-box">

                        <div className="flex flex-col">
                            <h1 className="text-[#C3C8D4] font-extrabold text-5xl">Login</h1>

                            <Formik
                                initialValues={{
                                    email: '',
                                }}
                                validationSchema={LoginSchema}
                                onSubmit={handleSessionRequest}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <div className=" mt-8">
                                            <Field  
                                                name="email" 
                                                placeholder="Email"
                                                className="p-2 text-[#3A4259] rounded-lg border-2 bg-[#121829] border-[#11263D] w-80" 
                                            />
                                            {errors.email && touched.email ? (
                                                <div className="text-red-600">{errors.email}</div>
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
