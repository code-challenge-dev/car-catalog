import CarCard from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import ShowMore from '@/components/ShowMore'
import { fuels, yearsOfProduction } from '@/constants'
import { HomeProps } from '@/types'
import { fetchCars } from '@/utils'

export default async function Home({ searchParams }: HomeProps) {
  const fetchedCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    fuel: searchParams.fuel || '',
    year: searchParams.year || 2018,
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  })

  const isDataEmpty =
    !Array.isArray(fetchedCars) || fetchedCars.length < 1 || !fetchedCars

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explore cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {fetchedCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > fetchedCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-bakc text-xl font-bold">
              Oops! We didn't find anything..
            </h2>
            <p>{fetchedCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
