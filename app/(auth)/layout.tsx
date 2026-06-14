import { requiredUnAuth } from "@/features/auth/actions"

export default async function Authlayout({ 
    children,
} : {
    
    children: React.ReactNode

}) {
    await requiredUnAuth()
    return (
        <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-muted/40 px py-12">
            <div className="w-full max-w-sm">
                {children}
            </div>
        </div>
    )
}