import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/DB logo.png" width={128} height={100} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <a>Schools</a>
        </nav>
    );
}

export default Navbar