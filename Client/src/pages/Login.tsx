import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../lib/ui/Card"
import { InputGroup } from "../lib/ui/InputGroup"
import Button from "../lib/ui/Button"
import { useLogin } from "../lib/auth/auth.hooks"

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const mutation = useLogin()

    return(
        <section className="py-6 lg:py-21 bg-white">
            <div className="container mx-auto max-w-3xl px-4 lg:px-6">
                <Card className="border-gray-300 border" >
                    <CardHeader>
                        <CardTitle className="text-center" >Sign In</CardTitle>
                        <CardDescription className="text-center" >
                            Sign In to your OpenCapacity account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <InputGroup name="email" type="email" placeholder="Email" action={(e) => setEmail(e.target.value)} />
                            <InputGroup name="password" type="password" placeholder="Password" action={(e) => setPassword(e.target.value)} />
                            <Button size="md" variant="solid" action={() => mutation.mutate({"email": email, "password": password})} >Sign In</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default Login