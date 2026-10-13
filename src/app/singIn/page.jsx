"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function SingIn() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries())
        console.log(user)
        const { data, error } = await authClient.signIn.email({
            email:user.email,
            password:user.password,

        })
        if(data){
            redirect('/');
        }
    }
    return (
      <Card className='max-w-2xl mx-auto mt-10 w-full max-w-md rounded-3xl border border-white/30
        bg-white/80 backdrop-blur-xl shadow-2xl p-8 space-y-5 '>
            <h2 className='text-3xl font-bold text-center bg-gradient-to-r
            from-fuchsia-600 via-purple-600 to-cyan-500
            bg-clip-text text-transparent'>এখনই লগইন করুন</h2>
             <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
            <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "Please enter a valid email address";
                    }
                    return null;
                }}
            >
                <Label>ই-মেইল</Label>
                <Input placeholder="আপনার ই-মেইল" />
                <FieldError />
            </TextField>
            <TextField
                isRequired
                minLength={8}
                name="password"
                type="password"
                validate={(value) => {
                    if (value.length < 8) {
                        return "Password must be at least 8 characters";
                    }
                    if (!/[A-Z]/.test(value)) {
                        return "Password must contain at least one uppercase letter";
                    }
                    if (!/[0-9]/.test(value)) {
                        return "Password must contain at least one number";
                    }
                    return null;
                }}
            >
                <Label>পাসওয়ার্ড</Label>
                <Input placeholder="লগইন পাসওয়ার্ড দিন" />
                <Description>অবশ্যই অন্তত ৮টি অক্ষরের হতে হবে, যার মধ্যে একটি বড় হাতের অক্ষর ও একটি সংখ্যা থাকতে হবে।</Description>
                <FieldError />
            </TextField>
            <div className="gap-2">
                <Button type="submit" className={'w-full'}>
                    <Check />
                    সাবমিট করুন
                </Button><br />
                <div className="text-center ">
                    <h2 className={'w-full py-4'} variant="secondary">
                    নতুন একাউন্ট খুলুন <Link href={'/signUp'} className="text-blue-500 hover:underline"> নিবন্ধন করুন</Link>
                </h2>
                </div>
            </div>
        </Form>
        </Card>

    );
}