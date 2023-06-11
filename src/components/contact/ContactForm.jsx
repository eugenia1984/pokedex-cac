import { useState } from 'react'
import { helpHttp } from '../../help/helpHttp'
import {
  ERROR_MSG,
  ERROR_REQUIRED,
  initialForm,
  regexComments,
  regexEmail,
  regexName,
  regexPhone
} from '../../utils/constants'
import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const ContactForm = ({ title, text }) => {
  const [agreed, setAgreed] = useState(false)
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const { firstName, lastName, email, telephone, comments } = form

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleBlur = (e) => {
    handleChange(e)
    setErrors(validateForm(form))
  }

  const validateForm = (form) => {
    let errors = {}

    if (!form.firstName) {
      errors.firstName = ERROR_REQUIRED.firstName
    } else if (!regexName.test(form.firstName.trim())) {
      errors.firstName = ERROR_MSG.firstName
    }

    if (!form.lastName) {
      errors.lastName = ERROR_REQUIRED.lastName
    } else if (!regexName.test(form.lastName.trim())) {
      errors.lastName = ERROR_MSG.lastName
    }

    if (!form.email) {
      errors.email = ERROR_REQUIRED.emall
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = ERROR_MSG.email
    }

    if (!form.telephone) {
      errors.telephone = ERROR_REQUIRED.telephone
    } else if (!regexPhone.test(form.telephone.trim())) {
      errors.telephone = ERROR_MSG.telephone
    }

    if (!form.subject) {
      errors.subject = ERROR_REQUIRED.subject
    }

    if (!form.comments) {
      errors.comments = ERROR_REQUIRED.comments
    } else if (!regexComments.test(form.comments.trim())) {
      errors.comments = ERROR_MSG.comments
    }

    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validateForm(form))

    if (Object.keys(errors).length === 0) {
      setLoading(true)
      helpHttp()
        .post('https://formsubmit.co/ajax/costamariaeugenia1@gmail.com', {
          body: form,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        })
        .then((res) => {
          setLoading(false)
          setResponse(true)
          setForm(initialForm)
          setTimeout(() => setResponse(false), 4000)
        })
    } else {
      alert('Ups... error')
    }
  }

  return (
    <div className="isolate bg-slate-50 px-6 my-24 sm:my-32 lg:px-8 py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-lg leading-8 text-gray-600">{text}</p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className={style.txtBlack}>
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                onBlur={handleBlur}
                onChange={handleChange}
                className={style.labelName}
                value={firstName}
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className={style.txtBlack}>
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                onBlur={handleBlur}
                onChange={handleChange}
                className={style.labelName}
                value={lastName}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className={style.txtBlack}>
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                onBlur={handleBlur}
                onChange={handleChange}
                className={style.labelName}
                value={email}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className={style.txtBlack}>
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                onBlur={handleBlur}
                onChange={handleChange}
                className={style.labelName}
                value={telephone}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className={style.txtBlack}>
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className={style.labelName}
                onBlur={handleBlur}
                onChange={handleChange}
                value={comments}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <span className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </span>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button type="submit" className={style.sendBtn}>
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

const style = {
  sendBtn:
    'block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  labelName:
    'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',

  txtBlack: 'block text-sm font-semibold leading-6 text-gray-900'
}
