import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { HeaderButtonBack } from "./headers.style";

const HeaderBack = () => {
    return (
        <HeaderButtonBack>
            <Link href='/'>
                <ArrowLeft size={24} color="black" />
            </Link>
        </HeaderButtonBack>
    );
}

export default HeaderBack;