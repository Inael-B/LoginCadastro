"use client"

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// calendário
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"



export default function Register(){
    const [date, setDate] = React.useState<Date>()
    return(
        <div id="Corpo" className="bg-slate-100 h-dvh p-8 flex space-x-[32px]">
            <section id="leftCard" className="items-center w-1/2 flex justify-center h-full ">
                <div id="Content" className="max-w-[420px]">
                    <div>
                        <h2 className=" text-4xl">Welcome Back 👋</h2>
                        <h3 className=" text-xl leading-[32px] mt-[16px]">Today is a new day. It's your day. You shape it. 
                        Sign in to start managing your projects.</h3>
                    </div>
                    <form className="space-y-[16px] flex flex-col mt-[48px] mb-[16px]">
                        {/* Nome e sobrenome */}
                        <div id="sec1" className="flex space-x-4">
                            <div className=" flex flex-col flex-grow">
                                <label htmlFor="firstName">Nome</label>
                                <Input id="firstName" type="name" placeholder="Nome"></Input>
                            </div>
                            <div className=" flex flex-col flex-grow">
                                <label htmlFor="secondName">Email</label>
                                <Input id="secondName" type="name" placeholder="Sobrenome"></Input>
                            </div>
                        </div>
                        {/* CPF e Telefone */}
                        <div id="sec2" className="flex space-x-4">
                            <div className=" flex flex-col flex-grow">
                                <label htmlFor="cpf">CPF</label>
                                <Input id="cpf" type="number" placeholder="CPF"></Input>
                            </div>
                            <div className=" flex flex-col flex-grow">
                                <label htmlFor="telefone">Telefone</label>
                                <Input id="firstName" type="tel" placeholder="Telefone"></Input>
                            </div>
                        </div>
                        {/* Data de nascimento */}
                        <div id="sec3" className="flex space-x-4">
                            <div className=" flex flex-col flex-grow">
                                <label htmlFor="uf">UF</label>
                                <Select>
                                <SelectTrigger className="w-[64px]">
                                    <SelectValue placeholder="UF" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ac">AC</SelectItem>
                                    <SelectItem value="al">AL</SelectItem>
                                    <SelectItem value="ce">CE</SelectItem>
                                </SelectContent>
                                </Select>
                            </div>
                            <div className=" flex flex-col flex-grow">
                                <label htmlFor="cidade">Cidade</label>
                                <Input id="cidade" type="name" placeholder="Cidade"></Input>
                            </div>
                            <div className=" flex flex-col flex-grow">
                                <label htmlFor="dataNascimento">Data de Nascimento</label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[180px] justify-start text-left font-base bg-transparent",
                                            !date && "text-muted-foreground"
                                        )}
                                        >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "dd/MM/yyyy") : <span>Selecione</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        {/* Email */}
                        <div id="sec4" className="flex space-x-4">
                            <div className=" flex flex-col flex-grow">
                                <label htmlFor="email">Email</label>
                                <Input id="email" type="email" placeholder="email@email.com"></Input>
                            </div>
                        </div>
                        {/* Email */}
                        <div id="sec5" className="flex space-x-4">
                            <div className=" flex flex-col flex-grow">
                                <label htmlFor="password">Senha</label>
                                <Input id="password" type="password" placeholder="Senha"></Input>
                            </div>
                            <div className=" flex flex-col flex-grow">
                                <label htmlFor="password">Confirme sua senha</label>
                                <Input id="password" type="password" placeholder="Senha"></Input>
                            </div>
                        </div>
                        <Button className="text-xl flex flex-grow">Cadastrar</Button>
                    </form>
                    <div className="w-full flex justify-center">
                        <p>Já tem uma conta <Link href="/login" className=" text-primary">Faça seu login</Link></p>
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