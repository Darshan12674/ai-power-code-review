import { requiredAuth } from "@/features/auth/actions";

export default async function ProtechtedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    await requiredAuth()

    return <div className="min-h-svh">{children}</div>
}