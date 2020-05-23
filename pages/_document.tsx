import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head title="Boda Paola y Daniel">
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Great+Vibes&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Libre+Caslon+Text:400,400i,700&display=swap" rel="stylesheet" />
                    <link href="https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css" rel="stylesheet" />
                    <link rel="stylesheet" href="//cdn.materialdesignicons.com/5.2.45/css/materialdesignicons.min.css"/>
                    <link rel="stylesheet" href="/css/open-iconic-bootstrap.min.css" />
                    <link rel="stylesheet" href="/css/animate.css" />
                    <link rel="stylesheet" href="/css/owl.carousel.min.css" />
                    <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
                    <link rel="stylesheet" href="/css/magnific-popup.css" />
                    <link rel="stylesheet" href="/css/aos.css" />
                    <link rel="stylesheet" href="/css/ionicons.min.css" />
                    <link rel="stylesheet" href="/css/flaticon.css" />
                    <link rel="stylesheet" href="/css/icomoon.css" />
                    <link rel="stylesheet" href="/css/style.css" />
                </Head>
                <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                    <Main />
                    <script src="/js/jquery.min.js"></script>
                    <script src="/js/jquery-migrate-3.0.1.min.js"></script>
                    <script src="/js/popper.min.js"></script>
                    <script src="/js/bootstrap.min.js"></script>
                    <script src="/js/jquery.easing.1.3.js"></script>
                    <script src="/js/jquery.waypoints.min.js"></script>
                    <script src="/js/jquery.stellar.min.js"></script>
                    <script src="/js/owl.carousel.min.js"></script>
                    <script src="/js/jquery.magnific-popup.min.js"></script>
                    <script src="/js/aos.js"></script>
                    <script src="/js/jquery.animateNumber.min.js"></script>
                    <script src="/js/jquery.mb.YTPlayer.min.js"></script>
                    <script src="/js/scrollax.min.js"></script>
                    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
                    <script src="/js/google-map.js"></script>

                    <script src="js/main.js"></script>
                    <NextScript />
                </body>
            </Html>
        );
    }
}