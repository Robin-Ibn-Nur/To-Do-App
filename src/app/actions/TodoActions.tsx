"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "../../../utils/Prisma"

export async function create(formData: FormData) {
    const input = formData.get("input") as string

    prisma.todo.create({
        data: {
            title: input
        }
    })
    console.log("input:", input);
}
