import { listVolunteers } from '@/api/list-volunteers'
import { ErrorContainer } from '@/app/(public)/(landing-page)/_components/error-container'
import { volunteersListPageSize } from '@/config/volunteers'
import { VolunteerList } from './volunteer-list'

export async function VolunteerListWrapper() {
  const { data, message, result } = await listVolunteers({
    pageSize: volunteersListPageSize,
  })

  if (result === 1) {
    return <VolunteerList initialData={data} />
  }

  return <ErrorContainer message={message} />
}