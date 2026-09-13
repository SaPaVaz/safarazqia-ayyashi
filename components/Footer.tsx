import ContactForm from "@/components/ContactForm";
import { contact } from "@/data/data";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
export default function Footer() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-white">
              {contact.heading}
              </h2>
            <p className="mt-4 text-lg text-gray-300">
              {contact.description}
            </p>
            <address className="mt-6 flex flex-col gap-2 not-italic text base text-gray-400">
              <a className="flex items-center gap-3 hover:text-white" href={`mailto:${contact.email}`}>
                <EnvelopeIcon aria-hidden="true" className="size-6" />
                {contact.email}
              </a>
              <a className="flex items-center gap-3 hover:text-white" href={`mailto:${contact.email}`}>
                <PhoneIcon aria-hidden="true" className="size-6" />
                {contact.phone}
              </a>
            </address>
            <div className="mt-12">
              <div className="flex flex-row items-start gap-8">
                {contact.socialLinks.map((socialLink) => (
                  <a
                    className="flex flex-col items-center gap-2">
                    <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10 flex items-center justify-center w-12">
                      <EnvelopeIcon aria-hidden="true" className="size-6" />
                    </div>
                    <p className="mt-4 text-base">{socialLink.platform}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
      <div
        aria-hidden="true" 
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl pt-32">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  )
}
