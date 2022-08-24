import Link from 'next/link'
import Head from 'next/head'
const Index = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className='container vh-100 d-flex align-items-center justify-content-center'>
        <div className='text-center'>
          <div className='display-3'>404</div>
          <div className='mb-3'>Page Not Found</div>
          <Link href='/'>
            <div className='btn btn-sm btn-primary text-white'>Go To Homepage</div>
          </Link>
        </div>
      </div>
    </>
  )
}
export default Index
