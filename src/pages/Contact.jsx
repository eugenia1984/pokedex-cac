import { ContactForm } from '../components/contact/ContactForm'

export const Contact = () => {
  return (
    <main className="main-container">
      <ContactForm
        title="Contact us"
        text="Please send us your question, we will be responding as soon as
            possible (48hs max.)."
      />
    </main>
  )
}
