import { useEffect, useState } from 'react'
import { getProduct } from '@api'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Loader from '@layouts/loader'

const Index = () => {
  const router = useRouter()
  const [data, setData] = useState([])
  const [pageIsLoading, setPageIsLoading] = useState(false)
  useEffect(() => {
    setPageIsLoading(true)
    getProduct()
      .then(({ data }) => {
        setData(data)
        setPageIsLoading(false)
      })
      .catch(() => {
        setPageIsLoading(false)
      })
  }, [])
  if (pageIsLoading) {
    return <Loader />
  }
  return (
    <div className='row'>
      {data?.map(({ id, image, name }) => (
        <div key={id} className='col-3 mb-3'>
          <div
            className='card p-2 h-100 pointer'
            onClick={() => router.push(`product/${id}`, null, { shallow: true })}
          >
            <Image
              alt='img'
              src={image}
              loading='lazy'
              placeholder='blur'
              blurDataURL='http://www.support.techsfactory.com/assets/img/placeholder.png'
              width='300'
              height='300'
              className='w-100 h-auto'
            />
            <p className='mb-0 text-center fw-bold text-truncate'>{name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Index
