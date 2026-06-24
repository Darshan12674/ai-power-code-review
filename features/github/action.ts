"use server"

import { getServerSession } from "../auth/actions";
import { redirect } from "next/navigation";
import { deleteInstallation } from "./sever/installation";
import { DASHBOARD_ROUTES } from "../dashboard/lib/routes";

export async function disconnectGithubApp () {
    const session = await getServerSession()
     
    if(!session){
        redirect("/sign-in")
    }

    await deleteInstallation(session.user.id)
    redirect(DASHBOARD_ROUTES.github)
}