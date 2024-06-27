import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Hero from '../../components/Hero'




type Props = {}

export default function Home({ }: Props) {
    return (
        <>
            <Header />
            <section>
                <Hero />
            </section>
            <Footer />
        </>
    )
};
