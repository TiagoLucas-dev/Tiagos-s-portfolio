import Image from 'next/image';
import { List } from '@phosphor-icons/react/dist/ssr';
import Slider from './components/Slider';
import Form from './components/Form';
import LatestProjects from './components/LatestProjects';
import TypeAnimations from './components/TypeAnimations';




export default function Home() {



    const sliderImages = [
        <Image src="/python.svg" alt="Python" width={125} height={125} />,
        <Image src="/javascript.svg" alt="JavaScript" width={125} height={125} />,
        <Image src="/nextjs-icon.svg" alt="Next.js" width={125} height={125} />,
        <Image src="/react.svg" alt="React" width={125} height={125} />,
        <Image src="/tailwindCss.svg" alt="Tailwind CSS" width={125} height={125} />,
        <Image src="/styled-components.svg" alt="Styled Components" width={125} height={125} />
    ];

    const latestProjects = [
        {
            imageSrc: '/python.svg',
            alt: 'Python',
            title: 'Projeto Python',
            tag: 'Backend'
        },
        {
            imageSrc: '/javascript.svg',
            alt: 'JavaScript',
            title: 'Projeto JS',
            tag: 'Frontend'
        },
        {
            imageSrc: '/nextjs-icon.svg',
            alt: 'Next.js',
            title: 'Projeto Next.js',
            tag: 'Fullstack'
        },
        {
            imageSrc: '/react.svg',
            alt: 'React',
            title: 'Projeto React',
            tag: 'Frontend'
        },
        {
            imageSrc: '/tailwindCss.svg',
            alt: 'Tailwind CSS',
            title: 'Projeto Tailwind',
            tag: 'CSS'
        },
        {
            imageSrc: '/styled-components.svg',
            alt: 'Styled Components',
            title: 'Projeto Styled',
            tag: 'CSS-in-JS'
        }
    ];

    return (
        <div className="mx-10 mb-24">
            <header className="flex items-center justify-between mt-6 mb-6">
                <h2 className="text-xl font-semibold">
                    <a href="/">Tiago Lucas.dev</a>
                </h2>

                <menu>
                    <List size={32} color="black" weight="bold" />
                </menu>

                <nav className="hidden">
                    <menu className="flex">
                        <li>Sobre</li>
                        <li>Experiencia</li>
                        <li>Contato</li>
                    </menu>
                </nav>
            </header>

            <main>
                <div className="flex flex-col mb-[4.5rem] items-start">
                    <div className="font-semibold mb-6 italic">Olá 🇵🇹 | Hello 🇬🇧 | Hola 🇪🇸</div>
                    <h1 className="text-3xl font-semibold italic mb-6">
                        &lt; <TypeAnimations /> /&gt;
                    </h1>
                    <p className="text-base mb-12">Sempre na busca de novos conhecimentos e melhorar cada vez mais, utilizando as melhores práticas e métodos no desenvolvimento. Prazer... Tiago Lucas 👋</p>

                    <button className="bg-black pt-4 pr-12 pb-4 pl-12 text-white">Contato</button>
                </div>

                <div className="flex justify-center ">
                    <Image
                        src="/perfil.jpg"
                        alt="Picture of the author"
                        width={250}
                        height={500}
                        className="m-0 rounded-lg transition duration-400 ease-in-out
                            [transform:perspective(400px)_rotate3d(1,-1,0,8deg)] 
                            hover:[transform:perspective(400px)_rotate3d(1,-1,0,-8deg)] "
                    />
                </div>

                <div className="text-base mt-12">
                    {/* Carrossel com alguns ícones (Slider) */}
                    <section className="flex">
                        <Slider images={sliderImages} />
                    </section>
                </div>

                <div className="text-base mt-12 mb-12">
                    <section className="flex items-center flex-col">
                        <h2 className="text-3xl font-semibold">Sobre mim</h2>
                        <div className="mt-20 mb-28">
                            <Image src="/perfil.jpg" alt="Picture of the author" width={100} height={100} />
                        </div>
                        <div className="bg-gray-200 p-4 text-center rounded-lg">
                            <p>
                                Sou o Tiago, desenvolvedor de software especializado em soluções web e automação de processos, com domínio em React, HTML, CSS, JavaScript e Python. <br /> <br />
                                Atuei na CPTM automatizando processos críticos e na Xerox Corporation desenvolvendo micro-frontends com React e Next.js. Busco desafios que impulsionem minhas habilidades e gerem impacto positivo.
                            </p>
                        </div>
                    </section>
                </div>

                <div>
                    <section className="flex items-center flex-col">
                        <h2 className="text-3xl font-semibold">Últimos projetos</h2>

                        {/* Carrossel de projetos (LatestProjects) */}
                        <div
                            className="mt-6 w-full flex justify-center items-center
"
                        >
                            <LatestProjects projects={latestProjects} />
                        </div>
                    </section>
                </div>

                <div className="mt-12 flex items-center flex-col">
                    <h2
                        className="text-xl
 font-semibold mb-2"
                    >
                        Experiências Profissionais
                    </h2>

                    <section
                        className="p-4 bg-gray-200 rounded-lg mb-4
"
                    >
                        <ul
                            className="w-60 flex items-start flex-col gap-4
"
                        >
                            <li className="">
                                <span className="font-bold">.</span> Automatização do processo de cadastro de documentos através da criação de um RPA, aumentando eficiência operacional.
                            </li>

                            <li className="">
                                <span className="font-bold">.</span> Liderança no desenvolvimento de um sistema para filtragem e verificação de documentos, impactando mais de 10 mil registros.
                            </li>
                        </ul>
                        <div className="flex items-center gap-2 mt-6">
                            <Image src="/CPTM_(Logo).png" alt="CPTM - Companhia Paulista de Trens Metropolitanos" width={50} height={50} />
                            <div>
                                <h3 className="font-semibold">CPTM</h3>
                                <span>Aluno Aprendiz</span>
                            </div>
                        </div>
                    </section>

                    <section className="p-4 bg-gray-200 rounded-lg mb-4 ">
                        <ul
                            className="w-60 flex items-start flex-col gap-4
"
                        >
                            <li>
                                <span className="font-bold text-xl">.</span> Desenvolvimento Front-End de uma plataforma Low-Code utilizando BPMN.IO.
                            </li>

                            <li>
                                <span className="font-bold text-xl">.</span> Criação de páginas web usando ReactJs e Next em micro-frontends.
                            </li>
                        </ul>
                        <div className="flex items-center gap-2 mt-6">
                            <Image src="/Xerox_logo.svg" alt="Xerox Corporation" width={50} height={50} />
                            <div>
                                <h3 className="font-semibold">Xerox Corporation</h3>
                                <span>Desenvolvedor</span>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-10">
                    <section className="w-72 flex items-start flex-col gap-6">
                        <h2 className="text-xl font-semibold">Vamos trabalhar juntos!</h2>
                        <p>
                            Olá, eu sou o Tiago 👋
                            <br />
                            Entre em contato comigo e vamos bater um papo.
                        </p>
                        <div className="flex gap-6 mt-2">
                            <a href="https://github.com/TiagoLucas-dev" target="_blank">
                                <Image src="/social/github.svg" alt="Github" width={35} height={35} />
                            </a>
                            <a href="https://wa.me/5511964775051" target="_blank">
                                <Image src="/social/whatsapp.svg" alt="WhatsApp" width={35} height={35} />
                            </a>
                            <a href="mailto:titi020604@gmail.com">
                                <Image src="/social/gmail.svg" alt="Gmail" width={35} height={35} />
                            </a>
                            <a href="https://www.linkedin.com/in/tiagolucasdasilva/" target="blank">
                                <Image src="/social/linkedin.svg" alt="LinkedIn" width={35} height={35} />
                            </a>
                        </div>
                    </section>

                <Form />

                </div>
            </main>
        </div>
    );
}
