import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login(){
    return(
        <div id="Corpo" className="bg-slate-100 h-dvh p-8 flex space-x-[32px]">
            <section id="leftCard" className="items-center w-1/2 flex justify-center ">
                <div id="Content" className="max-w-[420px]">
                    <div>
                        <h2 className=" text-4xl">Welcome Back 👋</h2>
                        <h3 className="text-xl leading-[32px] mt-[28px]">Today is a new day. It&apos;s your day. You shape it. 
                        Sign in to start managing your projects.</h3>
                    </div>
                    <form className="space-y-[24px] flex flex-col my-[48px]">
                        <div className=" flex flex-col flex-grow">
                            <label htmlFor="email">Email</label>
                            <Input id="email" type="email" placeholder="Digite seu email aqui"></Input>
                        </div>
                        <div className=" flex flex-col flex-grow">
                            <label htmlFor="password">Senha</label>
                            <Input id="password" type="password" placeholder="Digite sua senha"></Input>
                        </div>
                        <span className="w-full flex justify-end"><a href="#" className="text-primary">Forgot Password?</a></span>
                        <Button className="text-xl flex flex-grow">Entrar</Button>
                    </form>
                    <div className="w-full flex justify-center">
                        <p>Você não tem uma conta? <Link href="/register" className=" text-primary">Crie uma!</Link></p>
                    </div>
                </div>
            </section>
            <section id="rightCard" className="h-full content-center w-1/2">
                <div className="Container bg-loginBg h-full rounded-xl bg-cover bg-center">

                </div>
            </section>
        </div>
    )
}