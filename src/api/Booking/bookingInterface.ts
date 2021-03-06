import {
  BOOK,
  BookingType,
  VehicleStatus,
  BookingStatus,
  paymentType,
} from '../../enums'
import { Passengers } from '../Passenger'
import { Profile } from '../Profile'

export interface addBooking {
  tripId: string
  returnTripId?: string
  travelDate: string
  numberOfTravellers: number
  seat?: string
  paymentType: paymentType
  amount: number
  ReturnSeat?: string
  referenceId?: string
  passenger: Passengers[]
  profile: Profile
  type: BookingType
  service: BOOK
  returnDate?: string
  pickupLocation?: string
}

export interface AssignBus {
  travelDate: string
  tripId: string
  schedule: string
  typeId: string
  service: BOOK
  type: BookingType
  vehicleId: string
  status: BookingStatus
}
export interface InTransit {
  vehicleStatus: VehicleStatus
  vehicleId: string
  route: string
  schedule: string
  travelDate: string
  type: BookingType
  service: BOOK
}
export interface GetBookingWithVehicle {
  travelDate: string
  schedule: string
  tripId: string
  vehicle: string
  service: string
  type: string
  DepartureTerminal:string
}
export interface updateBooking {
  travelDate: string
  referenceId: string
}
export interface vehicleStatus {
  status: VehicleStatus
  id: string
  routeId: string
}

export interface bookingStatus {
  id: string
}
export interface passengerStatus {
  trip: string
  route: string
  schedule: string
  referenceId: string
}
export interface searchBooking {
  travelDate: string
  arrivalTerminal: string
  departureTerminal: string
}
export interface refernce {
  id: string
}
export interface manifest {
  vehicleId: string
  schedule: string
  travelDate: string
}
