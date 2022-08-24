const Index = () => {
  return (
    <div
      className='position-absolute start-0 w-100 d-flex align-items-center justify-content-center bg-white'
      style={{
        zIndex: 99,
      }}
    >
      <div
        className='d-flex align-items-center justify-content-center w-100'
        style={{ height: '75vh' }}
      >
        <div className='w-100 text-center'>
          <div className='spinner-border spinner-border-sm text-dd w-75px h-75px' />
          <div className='mt-3 fs-8 text-00'>loading ...</div>
        </div>
      </div>
    </div>
  )
}
export default Index
