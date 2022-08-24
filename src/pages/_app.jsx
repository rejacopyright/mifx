import { Provider } from 'react-redux'
import { store } from '@redux/store'

import '@styles/app.scss'
import '@assets/font-icon/line-awesome/css/line-awesome.min.css'
import '@assets/font-icon/font-awesome/css/all.min.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
