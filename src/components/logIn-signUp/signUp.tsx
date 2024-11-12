import React from 'react';
import { StatusLogIn } from './logIn-signUp'; 

export const statusSignUp = (): StatusLogIn => ({
    status: "Đăng ký",
    buttonstatus: "Đăng nhập",
    question: "Đã có tài khoản? "
});
const SignUp = () => {
    return (
        <div>
            <form id="login w-[100%]">
                <div className='flex flex-col justify-around gap-4'>
                <input type="text" id='name' name='name' className='w-[450px] border border-black rounded-[15px] p-[6px] text-[20px] font-thin' placeholder='Họ và Tên'/>
                <input type="text" id='address' name='address' className='w-[450px] border border-black rounded-[15px] p-[6px] text-[20px] font-thin mt-3' placeholder='Địa chỉ'/>
                <input type="text" id='phone' name='phone' className='w-[450px] border border-black rounded-[15px] p-[6px] text-[20px] font-thin' placeholder='Số Điện thoại'/>
                <input type="text" id='username' name='username' className='w-[450px] border border-black rounded-[15px] p-[6px] text-[20px] font-thin' placeholder='Tên Đặng nhập'/>
                <input type="text" id='password' name='password' className='w-[450px] border border-black rounded-[15px] p-[6px] text-[20px] font-thin mt-3' placeholder='Mật khẩu'/>
                <button type='submit' className='bg-[rgb(147,60,30)] m-5 block rounded-[20px] py-[3px] px-10 text-[20px] font-bold text-white'>
                Đăng ký
                </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;