import '../styles/global.css'
import Layouts from '../components/Layouts'


function App({ Component, pageProps}) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  )
}

export default App