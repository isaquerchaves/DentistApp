import Image from "next/image";
import { HeaderHomeStyle } from "./header-home.style";
import Link from "next/link";

const HeaderHome = () => {
    return (
        <HeaderHomeStyle>
            <Image
                src="/logo-1.png"
                alt="logo 1"
                width={35}
                height={35}
            />
            <Link href='/signin'>
                <button>Login</button>
            </Link>
        </HeaderHomeStyle>
    );
}

export default HeaderHome;