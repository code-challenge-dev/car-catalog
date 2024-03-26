'use client'

import { Combobox, Transition } from '@headlessui/react'

import { searManufacturerProps } from '@/types'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import { manufacturers } from '@/constants'

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: searManufacturerProps) => {
  const [query, setQuery] = useState('')

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src={'/car-logo.svg'}
              width={20}
              height={20}
              alt="car-logo"
              className="ml-4"
            />
          </Combobox.Button>
          <div className="relative">
            <Combobox.Input
              className={
                'search-manufacturer__input hover:shadow-lg duration-500'
              }
              placeholder="Volkswagen"
              displayValue={(manufacturer: string) => manufacturer}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="absolute z-20 w-full mt-1 bg-white  rounded-md shadow-lg">
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options>
                  {filteredManufacturers.length === 0 && query !== '' ? (
                    <Combobox.Option
                      value={query}
                      className={
                        'search-manufacturer__option relative cursor-default select-none'
                      }
                    >
                      Nothing found.
                    </Combobox.Option>
                  ) : (
                    filteredManufacturers.map((item) => (
                      <Combobox.Option
                        key={item}
                        className={({ active }) =>
                          `relative search-manufacturer__option ${
                            active
                              ? 'bg-primary-blue text-white'
                              : 'text-gray-900'
                          }`
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {item}
                            </span>
                            {selected && (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-white' : 'text-gray-700'
                                }`}
                              ></span>
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </div>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
