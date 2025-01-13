import { useQuery } from '@tanstack/react-query'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from 'src/firebase/firebase'
import { CarFull } from 'src/types'

export default function useCarData() {
  // Set Firestore Collection Ref
  const carDataRef = collection(db, 'cars')

  const useGetCarData = (search: string) =>
    useQuery({
      queryKey: ['carData', search],
      queryFn: async () => {
        const queryCarData = query(carDataRef, where('car.nbr', '==', search))

        const querySnapshot = await getDocs(queryCarData)
        const data = querySnapshot.docs.map(d => d.data())
        return data as CarFull[]
      }
    })

  const useGetAllCarData = () =>
    useQuery({
      queryKey: ['allCarData'],
      queryFn: async () => {
        const queryCarData = collection(db, 'cars')

        const querySnapshot = await getDocs(queryCarData)
        const data = querySnapshot.docs.map(d => d.data())
        return data
      }
    })

  return {
    useGetCarData,
    useGetAllCarData
  }
}
