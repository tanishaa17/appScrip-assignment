import { Header } from '@/Pages/Header'
import { Navbar } from '@/Components/Navbar'
import { Main } from '@/Pages/Main'
import { Footer } from '@/Components/Footer'
import { Form } from '@/Components/Form'
import { FormButton } from '@/Components/Buttons/FormButton'

export default function Home() {
  return (
    <>
      {/* <Form /> */}
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </>

  )
}
