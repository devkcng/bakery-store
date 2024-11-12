import React,{FC , useState } from 'react';
import LogIn, {statuslogIn} from './logIn';
import SignUp, {statusSignUp} from './signUp';
export interface StatusLogIn {
    status: string;
    buttonstatus: string;
    question: string;
}
const LogInSignUp = ()  => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleStatus = () => {
        setIsLogin(!isLogin);
    };

    const currentStatus = isLogin ? statuslogIn(): statusSignUp();
    return (
        <div className='bg-black w-[100%]'>
            <div className='flex flex-row items-center justify-around'>
                <img src="/imgs/logo_project.png" alt="" className='w-[50%]'/>
                <div className='flex flex-col mh-[750px] w-[500px] '>
                    <span className='block text-center font-display text-white text-[35px] font-bold w-[100%]'>
                        {currentStatus.status}
                    </span>
                    <div className='flex flex-col bg-white h-[100%] border border-white items-center justify-center gap-2 py-5'>
                     {isLogin ? <LogIn /> : <SignUp/>}
                        <div>
                            <button className='bg-[rgb(147,60,30)] m-5 block rounded-[20px] py-[3px] px-10 text-[20px] font-bold text-white'>
                                {currentStatus.status}
                            </button>
                        </div>
                        <div>
                        <span className='text-center font-display text-black text-[18px] font-semibold'>
                            {currentStatus.question}
                        </span>
                        <button onClick={toggleStatus} className='py-[3px] text-[20px] font-bold text-[rgb(147,60,30)]'>
                            {currentStatus.buttonstatus}
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogInSignUp;