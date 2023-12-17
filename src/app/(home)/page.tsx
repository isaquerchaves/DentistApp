import Image from "next/image";
import HeaderHome from "../components/header-home";
import { HomeContent } from "./home-content.style";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <HeaderHome />
            <HomeContent>
                <section>
                    <p>Facilite as consultas para você e seu dentista.
                        <br />Organize suas informações de saúde de maneira mais fácil.
                        <br />Compartilhe seus problemas com seu dentista...</p>
                    <span>usando DentistApp</span>

                </section>
                <Image
                    src="/imagem-home-page.png"
                    alt="imagem home page"
                    width={287}
                    height={491}
                />
                <Link href='/signin'>
                    <button>Iniciar</button>
                </Link>
            </HomeContent>
        </>
    )
}
