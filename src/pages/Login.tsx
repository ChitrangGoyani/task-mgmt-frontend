import React from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const Login = () => {
    const navigate = useNavigate();
    const onSubmit = () => {
        navigate("/");
    }
    return (
        <div className="flex justify-center items-center h-full bg-white mt-32">
            <Card className="w-[350px]">
            <CardHeader className="items-center">
                <CardTitle>Login to Taskit.io</CardTitle>
            </CardHeader>
            <CardContent>
                <form>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                    <Input id="email" placeholder="Email" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                    <Input id="password" placeholder="Password" />
                    </div>
                </div>
                </form>
            </CardContent>
            <CardFooter>
                <Button onClick={onSubmit}>Login</Button>
            </CardFooter>
            </Card>
        </div>
    ); 
}
