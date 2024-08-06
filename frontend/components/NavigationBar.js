import Link from "next/link";

export default function NavigationBar() {
    return <header className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="#" className="text-2xl font-bold" prefetch={false}>
                School Public Website
            </Link>
            <nav className="flex items-center gap-6">
                <Link href="#" className="hover:underline" prefetch={false}>
                    School Notice
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Free Board
                </Link>
                <div className="flex items-center gap-2">
                    <Link href="login" className="hover:underline" prefetch={false}>
                        Login
                    </Link>
                    <Link
                        href="#"
                        className="inline-flex h-8 items-center justify-center rounded-md bg-primary-foreground px-4 text-sm font-medium text-primary transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        Register
                    </Link>
                </div>
            </nav>
        </div>
    </header>
}
