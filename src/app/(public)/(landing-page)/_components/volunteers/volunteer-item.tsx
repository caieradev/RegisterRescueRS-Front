import { ListVolunteersResponse } from '@/api/list-volunteers'
import { HomeIcon } from '@/components/icons/home'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MapPinIcon } from 'lucide-react'
import Link from 'next/link'
import { VolunteerNeed } from './volunteer-need'

type Props = {
  volunteer: ListVolunteersResponse[number]
}

export function VolunteerItem({ volunteer }: Props) {
  return (
    <div className="flex h-80 w-full flex-col justify-center gap-2 rounded-2xl bg-zinc-50 px-4 py-3 shadow-lg xl:h-64 xl:w-[600px] xl:justify-start xl:py-10 2xl:h-72 2xl:w-[790px]">
      <div className="flex gap-3 xl:gap-6">
        <div className="flex size-10 items-center justify-center rounded-full bg-celeste/45 2xl:size-12">
          <HomeIcon className="size-4 2xl:size-5" />
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <h2 className="text-xl font-bold uppercase 2xl:text-2xl">
            {volunteer.shelterName}
          </h2>
          <p className="text-sm 2xl:text-base">{volunteer.address}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 pl-0 xl:pl-16 2xl:pl-[72px]">
        {volunteer.volunteersSubscriptionLink &&
          volunteer.volunteersSubscriptionLink.length > 0 && (
            <Link
              href={volunteer.volunteersSubscriptionLink}
              className={cn(
                buttonVariants({ variant: 'link' }),
                'text-sm 2xl:text-base p-0 m-0 h-fit w-fit',
              )}
            >
              {volunteer.volunteersSubscriptionLink}
            </Link>
          )}
        <span
          data-available={volunteer.avaliable}
          className="text-sm font-extrabold data-[available=false]:text-red-500 data-[available=true]:text-green-500 2xl:text-base"
        >
          {volunteer.avaliable ? 'Abrigo disponível' : 'Abrigo indisponível'}
        </span>

        <div className="grid grid-cols-2 gap-2 xl:gap-0.5">
          <VolunteerNeed
            condition={volunteer.acceptingVolunteers}
            trueDescription="aceita voluntários"
            falseDescription="não aceita voluntários"
          />

          <VolunteerNeed
            condition={volunteer.acceptingDoctors}
            trueDescription="aceita médicos"
            falseDescription="não aceita médicos"
          />

          <VolunteerNeed
            condition={volunteer.acceptingDonations}
            trueDescription="aceita doações"
            falseDescription="não aceita doações"
          />

          <VolunteerNeed
            condition={volunteer.acceptingVeterinarians}
            trueDescription="aceita veterinários"
            falseDescription="não aceita veterinários"
          />
        </div>

        <div className="flex justify-end">
          <Link
            href={`https://www.google.com/maps/place/${volunteer.latitude},${volunteer.longitude}`}
            target="_blank"
            className={cn(
              buttonVariants({ variant: 'link', size: 'link' }),
              'text-celeste flex gap-1 items-center',
            )}
          >
            <MapPinIcon className="size-4" />
            Ver no mapa
          </Link>
        </div>
      </div>
    </div>
  )
}
