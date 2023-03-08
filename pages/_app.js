// _app.js
import App from 'next/app'
// `pages/_app.js`
import '../styles/global.css';
import { Nav } from "../components/nav";
import { RightNav } from "../components/right_nav";

function MyApp({ Component, pageProps }) {
  return  <div className={'main_wrap'}>
  <Nav />
  <div>
    <Component {...pageProps} />
  </div>
  <RightNav />
</div>
}

export default MyApp