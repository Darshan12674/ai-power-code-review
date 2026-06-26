import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";
import { saveInatallation } from "@/features/github/sever/installation";
import { getServerSession } from "@/features/auth/actions";
import { redirect } from "next/navigation";

function buildSignInCallbackUrl (installationId: string | null): string {
    if(installationId) {
        return `/api/github/callback?installation_id=${installationId}`
    }

    return DASHBOARD_ROUTES.github
} 

export async function GET(request: Request) {
    try{
    const  {searchParams} = new URL(request.url)

    const installationId = searchParams.get("installation_id")
    const session = await getServerSession()

    if(!session) {
        const callbackUrl = buildSignInCallbackUrl(installationId) 
        redirect(`sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`)
    }

    if(installationId) {
        await saveInatallation(session.user.id, Number(installationId))
    }

    redirect(DASHBOARD_ROUTES.github)
    } catch(err) {
        console.error(err)
        throw err
    }
}