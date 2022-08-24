import { useEffect, useState } from 'react'
import { getProduct } from '@api'
import { useRouter } from 'next/router'
import Rating from 'react-rating'
import Header from '@layouts/header'
import Image from 'next/image'
import Loader from '@layouts/loader'

const Index = () => {
  const router = useRouter()
  const { id } = router.query
  const [detail, setDetail] = useState({})
  const [image, setImage] = useState(undefined)
  const [activeIndex, setActiveIndex] = useState(1)
  const [pageIsLoading, setPageIsLoading] = useState(false)
  useEffect(() => {
    if (id) {
      setPageIsLoading(true)
      getProduct()
        .then(({ data }) => {
          const res = data?.find(({ id: dataId }) => dataId === id)
          setDetail(res)
          setImage(res?.image)
          setPageIsLoading(false)
        })
        .catch(() => {
          setPageIsLoading(false)
        })
    }
  }, [id])
  console.log(detail)
  if (pageIsLoading) {
    return <Loader />
  }
  return (
    <>
      <Header />
      <div className='container py-3'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card radius-10 p-0 shadow-sm border-f2'>
              <div className='position-relative'>
                <Image
                  alt='img'
                  src={image}
                  placeholder='empty'
                  width='500'
                  height='500'
                  className='w-100 h-auto'
                />
                {detail?.images?.length > 0 && (
                  <div className='position-absolute bottom-0 end-0 me-3 mb-3' style={{ zIndex: 2 }}>
                    <div
                      className='text-white radius-50'
                      style={{ backgroundColor: 'rgb(0 0 0 / 50%)', padding: '2px .75rem' }}
                    >
                      {activeIndex}/{detail?.images?.length}
                    </div>
                  </div>
                )}
              </div>
              <div className='px-3 py-2'>
                <div className='row'>
                  {detail?.images?.map((img, index) => (
                    <div key={index} className='col-auto px-1'>
                      <div
                        className={`card pointer border-${image === img ? 'primary' : 'ee'}`}
                        onClick={() => {
                          setImage(img)
                          setActiveIndex(detail?.images?.indexOf(img) + 1)
                        }}
                      >
                        <Image
                          alt='img'
                          src={img}
                          placeholder='empty'
                          width='50'
                          height='50'
                          className='w-100 h-auto'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='p-3'>
              <p className='m-0 text-danger fs-9'>SALE</p>
              <p className='m-0 text-dark fs-5'>{detail?.name}</p>
              <div className='mt-1'>
                <Rating
                  initialRating={detail?.rating}
                  fractions={2}
                  emptySymbol='fa fa-star text-cc fa-lg'
                  fullSymbol='fa fa-star text-warning fa-lg'
                />
                <span className='text-bb ms-2'>({detail?.reviewCount} reviews)</span>
              </div>
              <p className='mb-0 mt-5 fs-3'>{detail?.price}</p>
              <hr />
              <div className='row'>
                <div className='col-md-6'>
                  <div className='btn btn-sm btn-warning text-white w-100'>
                    <i className='las la-cart-plus fs-5 me-1' />
                    Add To Cart
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='btn btn-sm btn-success text-white w-100'>Buy Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Index
