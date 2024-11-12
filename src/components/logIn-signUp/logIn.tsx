import React from 'react';
import { StatusLogIn } from './logIn-signUp'; // Import the StatusLogIn interface

// Define the statusSignUp function with StatusLogIn interface type
export const statuslogIn = (): StatusLogIn => ({
    status: "Đăng nhập",
    buttonstatus: "Đăng ký",
    question: "Chưa có tài khoản?"
});

const LogIn = () => {
    return (

        <div id="login w-[100%]">
            <div className='flex flex-col justify-around gap-4'>
            <input type="text" id='username' name='username' className='w-[450px] border border-black rounded-[15px] p-[6px] text-[20px] font-thin' placeholder='Tên Đặng nhập'/>
            <input type="text" id='password' name='password' className='w-[450px] border border-black rounded-[15px] p-[6px] text-[20px] font-thin mt-3' placeholder='Mật khẩu'/>
            </div>
        </div>
    );
};

export default LogIn;