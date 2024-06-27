import './style.css'

type Props = {
    nome: string;
    armadura: string;
    classe: string;
    classificacao: string;
    afiliacao: string;
    constelacao: string;
    ataques: Array<string>;
    urlImagem: string;
}

export default function Card({ nome, armadura, classe, classificacao, afiliacao, constelacao, ataques, urlImagem }: Props) {
    return (
        <div className="card">

            <div className="row">
                <div className="col col-1">
                    <ul>
                        <li>
                            <h2>{nome}</h2>
                        </li>
                        <li>
                            <p><strong>Armadura:</strong> <span>{armadura}</span></p>
                        </li>
                        <li>
                            <p><strong>Classe:</strong> <span>{classe}</span></p>
                        </li>
                        <li>
                            <p><strong>Classificação:</strong> <span>{classificacao}</span></p>
                        </li>
                        <li>
                            <p><strong>Afiliação:</strong> <span>{afiliacao}</span></p>
                        </li>
                        <li>
                            <p><strong>Constelação:</strong> <span>{constelacao}</span></p>
                        </li>
                        <li>
                            {
                                ataques.map((item) => (
                                    <p><strong>Ataque:</strong> <span>{item}</span></p>
                                ))
                            }

                        </li>
                        <li>
                            <a href="#header">Voltar</a>
                        </li>
                    </ul>
                </div>
                <div className="col col-3">
                    <img src={urlImagem} alt="" />
                </div>
            </div>
        </div>
    )
};