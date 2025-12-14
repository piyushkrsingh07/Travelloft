import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import {prisma }from '@/app/lib/prismadb'
export async function POST(request:NextRequest){
    try{
        const body=await request.json()
        const {email,name,password}=body

        const hashedPassword=await bcrypt.hash(password,10)

        const user=await prisma?.user.create({
            data:{
                email,
                name,
                hashedPassword
            }
        })

   return NextResponse.json({
              success:true,
              message:"Account successfully created",
              data:user
             })
    }catch(error){
return NextResponse.json(
                    { error: `Error creating account: ${error as Error}.message` },
                    { status: 401 }
                  );
    }
 

}