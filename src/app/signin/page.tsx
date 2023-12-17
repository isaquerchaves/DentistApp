import { Lock, User } from "lucide-react";
import Image from "next/image";
import { ContentLoginStyle, CardInput } from "../components/login-content.style";
import HeaderBack from "../components/header-back";


const SignIn = () => {
    return (
        <div>
            <HeaderBack />
            <ContentLoginStyle>
                <h1>Bem vindo novamente!👋</h1>
                <Image
                    src="/imagem-login.png"
                    alt="imagem login"
                    width={171}
                    height={136}
                />
                <h4>Insira suas credenciais para continuar</h4>
                <form>
                    <CardInput>
                        <User size={16} />
                        <input type="email" name="email" placeholder="Email" required />
                    </CardInput>
                    <CardInput>
                        <Lock size={16} />
                        <input type="password" name="password" placeholder="Senha" color="black" required />
                    </CardInput>
                    <button>
                        <input type="submit" value="" />
                        Continue
                    </button>
                </form>
            </ContentLoginStyle>

        </div>
    );
}

export default SignIn;