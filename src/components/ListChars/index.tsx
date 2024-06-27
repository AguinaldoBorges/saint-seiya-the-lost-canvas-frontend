import { useState } from 'react';
import Card from '../Card';
import './style.css'



type Props = {}

export default function ListChars({ }: Props) {
    const chars = [
        {
            nome: "Tenma",
            armadura: "Pegasus",
            classe: "Cavaleiro",
            classificacao: "Bronze",
            afiliacao: "Athena",
            constelacao: "Constelação de Pegasus",
            ataques: ["Pegasus Ryu Sei Ken (Pegasus Meteor Fist)", "Pegasus Sui Sei Ken (Pegasus Comet Fist)", "Pegasus Sui Sei Ken: Kiseki"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/athena-saints/pegasus-tenma-1.jpg",
        },
        {
            nome: "Yato",
            armadura: "Unicórnio",
            classe: "Cavaleiro",
            classificacao: "Bronze",
            afiliacao: "Athena",
            constelacao: "Constelação de Unicórnio",
            ataques: ["Unicorn Gallop", "Unicorn Genmuken"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/athena-saints/monoceros-yato-2-anime.jpg",
        },
        {
            nome: "Bleriot",
            armadura: "Leo Minor",
            classe: "Cavaleiro",
            classificacao: "Bronze",
            afiliacao: "Athena",
            constelacao: "Constelação de Leão Menor",
            ataques: ["Lionet Bomber"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/athena-saints/leo-minor-bleriot.jpg",
        },
        {
            nome: "Shion",
            armadura: "Áries",
            classe: "Cavaleiro",
            classificacao: "Ouro",
            afiliacao: "Athena",
            constelacao: "Constelação de Áries",
            ataques: ["Crystal Wall", "Stardust Revolution", "Starlight Extinction"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/athena-saints/aries-shion-lost-canvas-anime.jpg",
        },
        {
            nome: "Dohko",
            armadura: "Libra",
            classe: "Cavaleiro",
            classificacao: "Ouro",
            afiliacao: "Athena",
            constelacao: "Constelação de Libra",
            ataques: ["Rozan Shoryuha (Rozan Rising Dragon)", "Rozan Hyaku Ryu Ha (Rozan Hundred Dragons)", "Athena Exclamation"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/athena-saints/libra-dohko-lost-canvas-anime.jpg",
        },
        {
            nome: "Albafica",
            armadura: "Peixes",
            classe: "Cavaleiro",
            classificacao: "Ouro",
            afiliacao: "Athena",
            constelacao: "Constelação de Peixes",
            ataques: ["Crimson Thorn", "Piranhan Rose", "Royal Demon Rose"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/athena-saints/pisces-albafica-lost-canvas-anime.jpg",
        },
        {
            nome: "Asmita",
            armadura: "Virgem",
            classe: "Cavaleiro",
            classificacao: "Ouro",
            afiliacao: "Athena",
            constelacao: "Constelação de Virgem",
            ataques: ["Tenbu Horin (Treasure of the Heavens)", "Kahn", "Rikudou Rinne"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/athena-saints/virgo-asmita-lost-canvas-anime.jpg",
        },
        {
            nome: "Manigoldo",
            armadura: "Câncer",
            classe: "Cavaleiro",
            classificacao: "Ouro",
            afiliacao: "Athena",
            constelacao: "Constelação de Câncer",
            ataques: ["Sekishiki Meikai Ha (Waves of the Underworld)", "Sekishiki Kisouen (Purgatory of the Dead)", "Seki Shiki Tenryouha (Stardust Revolution)"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/athena-saints/cancer-manigold-lost-canvas-anime.jpg",
        },
        {
            nome: "Sísifo",
            armadura: "Sagitário",
            classe: "Cavaleiro",
            classificacao: "Ouro",
            afiliacao: "Athena",
            constelacao: "Constelação de Sagitário",
            ataques: ["Golden Arrow", "Infinity Break", "Sagittarius Exclamation"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/athena-saints/sagittarius-sisyphus-lost-canvas-anime.jpg",
        },
        {
            nome: "Aldebaran",
            armadura: "Touro",
            classe: "Cavaleiro",
            classificacao: "Ouro",
            afiliacao: "Athena",
            constelacao: "Constelação de Touro",
            ataques: ["Great Horn", "Titan's Nova", "Athena Exclamation"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/athena-saints/taurus-hasgard-lost-canvas-anime.jpg",
        },
        {
            nome: "Sasha",
            armadura: "Athena",
            classe: "Deusa",
            classificacao: "Deusa",
            afiliacao: "Athena",
            constelacao: "",
            ataques: ["Nike's Staff", "Aegis Shield", "Athena Exclamation"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/athena-saints/athena-sasha-lost-canvas-anime.jpg",
        },
        {
            nome: "Kagaho",
            armadura: "Bennu",
            classe: "Espectro",
            classificacao: "Estrela Celeste da Violência",
            afiliacao: "Hades",
            constelacao: "Constelação de Bennu",
            ataques: ["Corona Blast", "Rising Darkness", "Eruption"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/hades-specters/bennu-kagaho-v1-anime.jpg",
        },
        {
            nome: "Byaku",
            armadura: "Hanuman",
            classe: "Espectro",
            classificacao: "Terra",
            afiliacao: "Hades",
            constelacao: "Estrela Celestial da Mansidão",
            ataques: ["Hanuman Jump", "Hanuman Crush"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/hades-specters/necromancer-byaku-anime.jpg",
        },
        {
            nome: "Laimi",
            armadura: "Frog",
            classe: "Espectro",
            classificacao: "Terra",
            afiliacao: "Hades",
            constelacao: "Estrela Celestial do Esgoto",
            ataques: ["Seki Shiki Meikai Ha (Waves of the Underworld)", "Acid Amphibian"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/hades-specters/worm-laimi-lost-canvas-anime.jpg",
        },
        {
            nome: "Minos",
            armadura: "Grifo",
            classe: "Juiz do Inferno",
            classificacao: "Celestial",
            afiliacao: "Hades",
            constelacao: "Estrela Celestial da Nobreza",
            ataques: ["Cosmic Marionation", "Gigantic Feather Flap"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/hades-specters/griffon-minos-lost-canvas-anime.jpg",
        },
        {
            nome: "Phantasos",
            armadura: "Oneiros",
            classe: "Deus dos Sonhos",
            classificacao: "Deus",
            afiliacao: "Hades",
            constelacao: "",
            ataques: ["Dream Illusion", "Hypnos' Guard"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/hades-specters/portrayer-phantasos-anime.jpg",
        },
        {
            nome: "Pandora",
            armadura: "Pandora",
            classe: "Serva de Hades",
            classificacao: "",
            afiliacao: "Hades",
            constelacao: "",
            ataques: ["Evil Strings", "Harp's Melody"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/hades-specters/pandora-lost-canvas-anime.jpg",
        },
        {
            nome: "Alone",
            armadura: "Hades",
            classe: "Deus",
            classificacao: "Deus",
            afiliacao: "Hades",
            constelacao: "",
            ataques: ["Great Eclipse", "Eruption", "Underworld Wave"],
            urlImagem: "https://diegochagas.com/saint-seiya-api/assets/cloth-schemes/hades-specters/hades-lost-canvas-anime.jpg",
        }
    ];
    const [currentChar, setcurrentChar] = useState(chars[0])

    return (
        <section id='list-chars' className='container-fluid v3' >
            <div className="row  p2">
                <div className='col col-1 v3' id='list-chars-card-squares'>
                    {
                        chars.map((char) => (
                            <a href="#list-chars-card">
                                <img src={char.urlImagem} alt={char.nome} className='list-chars-img' onClick={() => setcurrentChar(char)} />
                            </a>

                        ))
                    }
                </div>

                <div className='col col-3' id='list-chars-card'>
                    <Card nome={currentChar.nome} armadura={currentChar.armadura} classe={currentChar.classe} classificacao={currentChar.classificacao} afiliacao={currentChar.afiliacao} constelacao={currentChar.constelacao} ataques={currentChar.ataques} urlImagem={currentChar.urlImagem} />
                </div>
            </div>
        </section>
    )
};