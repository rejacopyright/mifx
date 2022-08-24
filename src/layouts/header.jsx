import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
import { logout } from '@redux/store'
const Index = () => {
  const onLogout = () => {
    logout()
    setTimeout(() => {
      window.location.reload()
    }, 300)
  }
  return (
    <Navbar bg='light' expand='lg' sticky='top' className='border-bottom'>
      <div className='container py-2'>
        <div className='d-flex w-100 align-items-center'>
          <Link href='/'>
            <div className='fs-7 text-primary m-0 fw-normal pointer me-3'>
              <i className='las la-home me-1' />
              <span className=''>Home</span>
            </div>
          </Link>
          <div className='ms-auto'>
            <span className='pointer text-primary' onClick={onLogout}>
              Logout
            </span>
          </div>
        </div>
      </div>
    </Navbar>
  )
}

export default Index
