import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ListChars from '../../components/ListChars'
import './style.css'





type Props = {}

export default function Chars({ }: Props) {
  return (
    <>
      <Header />
      <section className='v3 ' id='chars-container'>
        <ListChars />
      </section>
      <Footer />
    </>
  )
};
