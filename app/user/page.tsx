'use client'
import LoginForm from "@/components/LoginForm"
import SignUpForm from "@/components/SignupForm"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function User (){
    // create state 
    const [isLogin ,setisLogin] = useState(true)
    return(
        <div className="min-h-screen flex flex-col justify-center items-center content-center bg-black text-white">
            <div className="mb-4">
      <Button className="text-sm"
      onClick={(isLogin)=>setisLogin(!isLogin)}
      variant={'ghost'}
      >
        {/* if condition is true so show login form else show signup form  */}
        {isLogin ? 'Need a account :Create':'Login with your current account'}
      </Button>

            </div>
            {isLogin ? <LoginForm/> : <SignUpForm/> }
        </div>
    )
}