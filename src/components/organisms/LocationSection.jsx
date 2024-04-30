import CardsLocation from "../molecules/CardsLocation"
import LocationTitle from "../atoms/LocationTitle"
import Map from "../atoms/Map"

const LocationSection = ({ backgroundColor, borderColor, children }) => {
  return (
    <>
      <LocationTitle backgroundColor={backgroundColor} borderColor={borderColor}>
        {children}
      </LocationTitle>
      <Map />
      <CardsLocation />
    </>
  )
}

export default LocationSection