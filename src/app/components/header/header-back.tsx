import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { HeaderButtonBack } from "./headers.style";

const HeaderBack = (props: any) => {
    return (
        <HeaderButtonBack>
            <Link href={props.href}>
                <ArrowLeft size={24} color="black" />
            </Link>
        </HeaderButtonBack>
    );
}

export default HeaderBack;