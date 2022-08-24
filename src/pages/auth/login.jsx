import { login } from '@api'
import { useRef, useState } from 'react'
import { updateToken } from '@redux/store'

const Index = () => {
  const inputRef = useRef()
  const [loading, setLoading] = useState(false)
  const onLogin = () => {
    setLoading(true)
    const {
      email: { value: email },
      password: { value: password },
    } = inputRef || {}
    login({ email, password })
      .then(({ data: { token } }) => {
        setLoading(false)
        updateToken(token)
        setTimeout(() => {
          window.location.reload()
        }, 300)
      })
      .catch(() => {
        setLoading(false)
        // updateToken(undefined)
      })
  }
  return (
    <div className='container'>
      <div className='vh-75 d-flex align-items-center justify-content-center'>
        <div className='w-100'>
          <div className='row'>
            <div className='col-md-4 offset-md-4'>
              <div className='card'>
                <div className='card-header text-center fw-bold'>
                  <i className='las la-lock fs-6 me-1' />
                  <span>LOGIN</span>
                </div>
                <div className='card-body'>
                  <div className='mb-4'>
                    <label className='fw-bold mb-1'>Email</label>
                    <input
                      type='text'
                      ref={(ref) => (inputRef.email = ref)}
                      className='form-control form-control-sm form-control-solid'
                      readOnly
                      defaultValue={'user@test.io'}
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='fw-bold mb-1'>Password</label>
                    <input
                      type='password'
                      ref={(ref) => (inputRef.password = ref)}
                      className='form-control form-control-sm form-control-solid'
                      readOnly
                      defaultValue={'Test123.'}
                    />
                  </div>
                  <button
                    type='button'
                    disabled={loading}
                    className='btn btn-sm w-100 btn-primary text-white'
                    onClick={onLogin}
                  >
                    {loading ? (
                      <>
                        <span className='spinner-border spinner-border-sm me-2' />
                        <span>Loading...</span>
                      </>
                    ) : (
                      'Login'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Index
