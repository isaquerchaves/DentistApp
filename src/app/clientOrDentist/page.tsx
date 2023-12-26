import Image from "next/image";
import HeaderBack from "../components/header/header-back";
import { Wrapper } from "../components/wrapper/wrapper.style";
import { ClientOrDentistContent } from "./clientOrDentist-content.style";
import { ButtonDefaultStyled } from "../components/button/button.style";

const ClientOrDentist = () => {
    return (
        <Wrapper>
            <HeaderBack href='/signin' />
            <ClientOrDentistContent>
                <div>
                    <p className="title">Escolha sua função para continuar</p>
                    <p className="sub-title">usando DentistApp</p>
                </div>
                <div className="card_function">
                    <button>
                        <div className="card_function_content">
                            <p>Paciente</p>
                            <Image
                                src="/client.png"
                                alt="Cliente"
                                width={64}
                                height={193}
                                className="card_function_image"
                            />
                        </div>
                    </button>
                    <button>
                        <div className="card_function_content">
                            <p>Detista</p>
                            <Image
                                src="/dentist.png"
                                alt="Cliente"
                                width={95}
                                height={193}
                                className="card_function_image"
                            />
                        </div>
                    </button>
                </div>
                <ButtonDefaultStyled>
                    Continue
                </ButtonDefaultStyled>
            </ClientOrDentistContent>
        </Wrapper>
    );
}

export default ClientOrDentist;