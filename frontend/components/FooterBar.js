import Link from "next/link";

export default function FooterBar() {
    return <footer className="bg-muted text-muted-foreground py-4 px-6 mt-auto">
        <div className="container mx-auto flex justify-between items-center">
            <p>&copy; 2024 KIV Team TechnoVerse. All rights reserved.</p>
            <nav className="flex items-center gap-4">
                <Link href="#" className="hover:underline" prefetch={false}>
                    Privacy Policy
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Terms of Service
                </Link>
                <Link href="#" className="hover:underline" prefetch={false}>
                    Contact Us
                </Link>
            </nav>
        </div>
    </footer>
}

// commit test
