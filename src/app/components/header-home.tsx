import Image from "next/image";
import { HeaderHomeStyle } from "./header-home.style";

const HeaderHome = () => {
    return (
        <HeaderHomeStyle>
            <Image
                src="/logo-1.png"
                alt="logo 1"
                width={35}
                height={35}
            />
            <button>Login</button>
        </HeaderHomeStyle>
    );
}

export default HeaderHome;