import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 broder-t border-gray-100 container mx-auto">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo image"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">Auto Hub 2024 &copy;</p>
        </div>

        <div className="footer__links">
          {footerLinks.map((l) => (
            <div key={l.title} className="footer__link">
              <h3 className="font-bold">{l.title}</h3>
              {l.links.map((i) => (
                <Link
                  key={i.title}
                  href={i.url}
                  className="text-gray-500 hover:text-gray-600 duration-200"
                >
                  {i.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <div className="flex-1 flex">
          <p>&copy; AutoHub. All Rights Reserved</p>
        </div>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href={'/'} className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
