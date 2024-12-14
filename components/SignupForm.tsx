'use client'       //client-Side Component
import { useState } from "react"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const SignUpForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handlesubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('SignUp Successfully with:', { email, password, confirmPassword });
    }
    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Sign Up</CardTitle>
                <CardDescription>Enter the asked details to create new account</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handlesubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            type="Password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required

                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            type="Password"
                            placeholder=" Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required

                        />
                    </div>
                    <Button type="submit" className="w-full" onClick={() => alert("Thanks for Sign Up!")}>Login</Button>
                </form>
            </CardContent>

        </Card>
    )
}

export default SignUpForm