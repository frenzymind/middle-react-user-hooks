import { useFetch } from './useFeatch'

type IPost = {
  id: number
  title: string
}

export function UseFetchPage() {
  const { data, isLoading, error, refetch } = useFetch<IPost>('https://jsonplaceholder.typicode.com/posts')

  return (
    <>
      <div>
        <button
          onClick={() =>
            refetch({
              params: {
                _limit: 3,
              },
            })
          }
        >
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>)}
    </>
  )
}
