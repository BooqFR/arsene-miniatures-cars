import { Button } from '@components'
import { useAuth, useCarData } from '@hooks'
import dayjs from 'dayjs'

export default function HomePage() {
  // Hooks
  const { useLogout } = useAuth()
  const { mutate: logout, isPending } = useLogout()
  const { useGetCarData } = useCarData()
  const { data: carData } = useGetCarData('10')

  console.log('carData', carData)

  return (
    <div className="p-6 flex flex-col items-center w-screen h-screen overflow-hidden">
      <p>HomePage</p>
      <Button isLoading={isPending} variant="secondary" onPress={logout} text="Logout" />

      <div className="m-8 overflow-auto flex w-full flex-1 flex-col">
        {carData?.map((car, i) => (
          <div
            key={i}
            className="flex gap-6 items-center bg-gray-50 border rounded-lg border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 w-full text-sm p-2.5"
          >
            <p className="font-bold">{`#${car.car.nbr}`}</p>
            <p className="flex-1 text-xs">{car.car.car_chassis}</p>
            <p className="flex-1 text-xs">{car.team.title}</p>
            <p className="flex-1 text-xs">{dayjs(car.event_date).format('YYYY')}</p>
            <p className="text-xs">{car.result.pos}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
