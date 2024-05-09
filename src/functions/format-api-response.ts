import { BaseApiResponse, FormattedBaseApiResponse } from '@/types/api'

export function formatApiResponse<T = unknown>(data: BaseApiResponse<T>) {
  return {
    result: data.Result,
    message: data.Message,
    data: data.Data,
  } satisfies FormattedBaseApiResponse<T>
}
