import Image from "next/image";
import HeaderHome from "../components/header-home";
import { HomeContent } from "./home-content.style";

export default function Home() {
    return (
        <div>
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
                <button>Iniciar</button>
            </HomeContent>
        </div>
    )
}
