export interface Course {
  accomodations: boolean
  addr1: string
  addr2: boolean
  city: string
  country: string
  courseArchitect: boolean
  courseDesigner: boolean
  courseId: number
  courseType: string
  courseTypeId: number
  description: boolean
  distanceFromMeKilometers: number
  distanceFromMeMiles: number
  fax: boolean
  fees: boolean
  globalMaxRank: number
  globalRankOneWeek: number
  globalRankThreeMonth: number
  holeCount: number
  holes: [{
    backLat: number
    backLng: number
    changeLocations: [{
      ourseHoleId: number
      courseHoleTeeBoxId: number
      hcp: number
      hcp2: boolean
      lat: number
      lng: number
      meters: number
      par: number
      teeColorType: boolean
      teeColorTypeId: boolean
      teeHexColor: boolean
      teeType: string
      teeTypeId: number
      yards: number
    }]
    courseHoleId: number
    courseId: number
    frontLat: number
    frontLng: number
    greenLat: number
    greenLng: number
    hole: number
    pinExpires: boolean
    pinLat: boolean
    pinLng: boolean
    teeBoxes: [{
        courseHoleId: number
      courseHoleTeeBoxId: number
      hcp: number
      hcp2: boolean
      lat: number
      lng: number
      meters: number
      par: number
      teeColorType: string
      teeColorTypeId: number
      teeHexColor: string
      teeType: string
      teeTypeId: number
      yards: number
    }]
  }]
  hours: boolean
  id: string
  includes: string
  lat: number
  lng: number
  localMaxRank: number
  localRankOneWeek: number
  localRankThreeMonth: number
  measurementType: string
  measurementTypeId: number
  mediaId: number
  name: string
  phone: string
  popularityOneWeek: number
  popularityThreeMonth: number
  practiceAreaId: number
  stateOrProvince: string
  status: string
  statusId: number
  thumbnail: string
  website: string
  zipCode: string
}
