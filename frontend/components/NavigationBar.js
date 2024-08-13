import Link from "next/link";

export default function NavigationBar() {
    return <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold" prefetch={false}>
                School Public Website
            </Link>
            <nav className="flex items-center gap-6">
                <Link href="/notices" className="hover:underline" prefetch={false}>
                    School Notice
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Free Board
                </Link>
                <div className="flex items-center gap-2">
                    <Link href="login" className="hover:underline" prefetch={false}>
                        Login
                    </Link>
                </div>
            </nav>
        </div>
    </header>
}
