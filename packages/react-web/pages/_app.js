import '@styles/globals.css'

const NoLayout = ({children}) => <>{children}</>

function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout ?? NoLayout;

  return (
    <div className="bg-celoFaintGray-default">
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  );
}

export default MyApp
