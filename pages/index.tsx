import { NextPage } from 'next';
import { DatoCMSService } from '../lib/dato-cms.service';
import AcceptInvitationForm from '../components/AcceptInvitationForm';
import Navigation from '../components/Navigation';

const IndexPage: NextPage<any> = ({ familia, burbuja, invitado }) => {
  return (
    <>
      <Navigation />
      <section id="home" className="video-hero js-fullheight" style={{ height: '700px', backgroundImage: 'url(images/bg_1.jpg)', backgroundSize: 'cover', backgroundPosition: 'top center' }} data-stellar-background-ratio="0.5">
        <div className="overlay" />
        {/* <a className="player" data-property="{videoURL:'https://www.youtube.com/watch?v=Mjjw19B7rMk',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default',optimizeDisplay:true}" /> */}
        <span></span>
        <div className="container">
          <div className="row js-fullheight justify-content-center d-flex align-items-center">
            <div className="col-md-12">
              <div className="text text-center">
                <div className="icon">
                  <span className="flaticon-rose-outline-variant-with-vines-and-leaves" />
                </div>
                <span className="subheading">Boda </span>
                <h1>Daniel &amp; Paola</h1>
                <div id="timer" className="d-flex">
                  <div className="time" id="days" />
                  <div className="time pl-3" id="hours" />
                  <div className="time pl-3" id="minutes" />
                  <div className="time pl-3" id="seconds" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-about ftco-no-pt ftco-no-pb" id="groom-bride-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap">
                <div className="row d-flex">
                  <div className="col-md-6 d-flex">
                    <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: 'url(images/about.jpeg)' }}>
                    </div>
                  </div>
                  <div className="col-md-6 py-md-5 text">
                    <div className="py-md-4">
                      <div className="row justify-content-start pb-3">
                        <div className="col-md-12 ftco-animate p-4 p-lg-5 text-center">
                          <span className="subheading mb-4">
                            <span className="text-secondary">{invitado.nombre} </span> <br/>
                            Te invitamos a <br /> nuestra boda </span>
                          <h2 className="mb-4 text-capitalize">Montiel Bonilla</h2>
                          <span className="icon flaticon-rose-variant-outline-with-vines" />
                          <span className="subheading">Que se celebrará el</span>
                          <p className="time mb-4"><span>19 junio, 2020</span></p>
                          <span className="subheading mb-5">Inicio 5:30</span>
                          <span className="subheading mb-5">Estancia Novillo <br />Escazú</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-section" style={{ marginBottom: 0, paddingBottom: '60px !important' }}>
        <div className="overlay-top" style={{ backgroundImage: 'url(images/top-bg.jpg)' }} />
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 text-center heading-section ftco-animate">
              <h2 className="mb-3">Nuestra boda</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-12 text-justify ">
                  <p>
                    Queremos hacerte partícipe de una gran noticia. Hace unos días Estancia Novillo nos informó que el <strong> Ministerio de Salud</strong> aprobó el protocolo para celebrar nuestra boda con los respectivos cuidados sanitarios. Para nosotros fue una sorpresa enorme y nos sentimos muy dichosos de tener esta oportunidad.
                  </p>
                  <p>
                    Con esta gran noticia, queremos invitarte a compartir una cena íntima en familia para celebrar nuestra unión. Sabemos que son tiempos distintos, y muchas cosas cambian, así que para nosotros es muy importante que vos y todos nuestros invitados se sientan seguros de su bienestar. Por lo tanto, te compartimos algunos detalles relevantes de nuestra boda:
                            </p>
                  <ul>
                    <li>Consistirá en una ceremonia y una cena únicamente. No habrá baile, ni DJ, ni ninguna actividad que signifique el rompimiento del distanciamiento social.
  </li>

                    <li>
                      Durante la cena, tendremos meseros que nos servirán la comida hasta la mesa, para que nadie tenga que trasladarse al estilo buffet.

  </li>
                    <li>
                      La cantidad de invitados no superará el 45% de la capacidad de La Estancia, por lo tanto tendremos suficiente espacio para que las mesas estén organizadas de tal forma que puedan sentarse con su respectiva “burbuja social” según los nuevos permisos del Ministerio de Salud.

  </li>
                    <li>
                      Todos nuestros invitados estarán ubicados en las mesas desde el inicio de la ceremonia y desde ahí podrán disfrutar de la misma. No habrá traslados a distintas ubicaciones.

  </li>
                    <li>
                      La Estancia estará reservada única y exclusivamente para nuestra actividad.
  </li>
                    <li>
                      Tendremos habilitado suficiente alcohol en gel para cada mesa y en La Estancia.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 text-center heading-section ftco-animate">
              <h2 className="mb-3">Confirmar Asistencia</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-12 text-left ">
                  <p>
                    Estamos muy emocionados por compartir este día en compañía de todos, pero también entendemos si por alguna razón, y a pesar de las medidas sanitarias, no quisieran acompañarnos por prevención a la situación.
                  </p>
                  <p>
                    <strong>
                      En ese caso, valoraremos mucho que anticipadamente nos puedan avisar para organizar de la mejor forma a nuestros asistentes.
                      En caso que sí nos acompañes, te agradecemos que nos confirmes tu asistencia a más tardar el Miércoles 27 de Mayo.
                    </strong>
                  </p>
                  <p>
                    Para nosotros sin duda el regalo más grande es nuestra familia y amigos, pero también hemos preparado una lista de regalos de boda en la tienda SIMAN (Multiplaza Este y Escazú) en caso que quieras bendecirnos en el inicio de nuestra historia. ¡Lo recibiremos con alegría y gratitud!

                    Si compras de manera presencial, puedes dar el nombre y código de nuestra lista: Montiel Bonilla, 121475
                    Si lo haces de manera online, este es el link donde puedes elegir tu regalo: FALTA LINK

                    Un abrazo,
                    Daniel y Paola
                  </p>
                  <AcceptInvitationForm invitado={invitado} burbuja={burbuja} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section" id="lovestory-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 text-center heading-section ftco-animate">
              <span className="clone">Love Story</span>
              <h2 className="mb-3">Love Story</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline animate-box">
                <li className="animate-box">
                  <div className="timeline-badge" style={{ backgroundImage: 'url(images/couple-1.jpg)' }} />
                  <div className="timeline-panel ftco-animate text-md-right">
                    <div className="overlay" />
                    <div className="timeline-heading">
                      <span className="date">June 10, 2017</span>
                      <h3 className="timeline-title">First We Meet</h3>
                    </div>
                    <div className="timeline-body">
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted animate-box">
                  <div className="timeline-badge" style={{ backgroundImage: 'url(images/couple-2.jpg)' }} />
                  <div className="timeline-panel ftco-animate">
                    <div className="overlay overlay-2" />
                    <div className="timeline-heading">
                      <span className="date">June 10, 2017</span>
                      <h3 className="timeline-title">First Date</h3>
                    </div>
                    <div className="timeline-body">
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
                    </div>
                  </div>
                </li>
                <li className="animate-box">
                  <div className="timeline-badge" style={{ backgroundImage: 'url(images/couple-3.jpg)' }} />
                  <div className="timeline-panel ftco-animate text-md-right">
                    <div className="overlay" />
                    <div className="timeline-heading">
                      <span className="date">June 14, 2017</span>
                      <h3 className="timeline-title">In A Relationship</h3>
                    </div>
                    <div className="timeline-body">
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted animate-box">
                  <div className="timeline-badge" style={{ backgroundImage: 'url(images/couple-4.jpg)' }} />
                  <div className="timeline-panel ftco-animate">
                    <div className="overlay overlay-2" />
                    <div className="timeline-heading">
                      <span className="date">May. 10, 2019</span>
                      <h3 className="timeline-title">We're Engaged</h3>
                    </div>
                    <div className="timeline-body">
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in .</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section bg-light" id="when-where-section">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 text-center heading-section ftco-animate">
              <span className="clone">Place</span>
              <h2 className="mb-3">Place &amp; Time</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ftco-animate">
              <div className="place img" style={{ backgroundImage: 'url(images/place-1.jpg)' }}>
                <div className="text text-center">
                  <span className="icon flaticon-reception-bell" />
                  <h3>The Reception</h3>
                  <p><span>Saturday, 28, 2019</span><br /><span>02:00 pm-10:00 pm</span></p>
                  <p><span>203 Fake St. Mountain View, San Francisco, California, USA</span></p>
                  <p><a href="#">+0 (123) 456 78 910</a></p>
                  <p><a href="#" className="btn-custom">See Map</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="place img" style={{ backgroundImage: 'url(images/place-2.jpg)' }}>
                <div className="text text-center">
                  <span className="icon flaticon-wedding-kiss" />
                  <h3>The Ceremony</h3>
                  <p><span>Saturday, 28, 2019</span><br /><span>02:00 pm-10:00 pm</span></p>
                  <p><span>203 Fake St. Mountain View, San Francisco, California, USA</span></p>
                  <p><a href="#">+0 (123) 456 78 910</a></p>
                  <p><a href="#" className="btn-custom">See Map</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate">
              <div className="place img" style={{ backgroundImage: 'url(images/place-3.jpg)' }}>
                <div className="text text-center">
                  <span className="icon flaticon-cake" />
                  <h3>The Party</h3>
                  <p><span>Saturday, 28, 2019</span><br /><span>02:00 pm-10:00 pm</span></p>
                  <p><span>203 Fake St. Mountain View, San Francisco, California, USA</span></p>
                  <p><a href="#">+0 (123) 456 78 910</a></p>
                  <p><a href="#" className="btn-custom">See Map</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section" id="gallery-section">
        <div className="container-fluid px-md-4">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 text-center heading-section ftco-animate">
              <span className="clone">Photos</span>
              <h2 className="mb-3">Gallery</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 ftco-animate">
              <a href="images/gallery-1.jpg" className="gallery img image-popup d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/gallery-1.jpg)' }}>
                <div className="icon d-flex align-items-center justify-content-center"><span className="ion-ios-image" /></div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a href="images/gallery-2.jpg" className="gallery img image-popup d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/gallery-2.jpg)' }}>
                <div className="icon d-flex align-items-center justify-content-center"><span className="ion-ios-image" /></div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a href="images/gallery-3.jpg" className="gallery img image-popup d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/gallery-3.jpg)' }}>
                <div className="icon d-flex align-items-center justify-content-center"><span className="ion-ios-image" /></div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a href="images/gallery-4.jpg" className="gallery img image-popup d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/gallery-4.jpg)' }}>
                <div className="icon d-flex align-items-center justify-content-center"><span className="ion-ios-image" /></div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a href="images/gallery-5.jpg" className="gallery img image-popup d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/gallery-5.jpg)' }}>
                <div className="icon d-flex align-items-center justify-content-center"><span className="ion-ios-image" /></div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a href="images/gallery-6.jpg" className="gallery img image-popup d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/gallery-6.jpg)' }}>
                <div className="icon d-flex align-items-center justify-content-center"><span className="ion-ios-image" /></div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a href="images/gallery-7.jpg" className="gallery img image-popup d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/gallery-7.jpg)' }}>
                <div className="icon d-flex align-items-center justify-content-center"><span className="ion-ios-image" /></div>
              </a>
            </div>
            <div className="col-md-3 ftco-animate">
              <a href="images/gallery-8.jpg" className="gallery img image-popup d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(images/gallery-8.jpg)' }}>
                <div className="icon d-flex align-items-center justify-content-center"><span className="ion-ios-image" /></div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="ftco-footer ftco-section">
        <div className="overlay" />
        <div className="container">
          <div className="row mb-5">
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Hookup</h2>
                <p>Far far away, behind the word mountains, far from the countries.</p>
                <ul className="ftco-footer-social list-unstyled mt-5">
                  <li className="ftco-animate"><a href="#"><span className="icon-twitter" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-facebook" /></a></li>
                  <li className="ftco-animate"><a href="#"><span className="icon-instagram" /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Quick Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Wellness</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Vintge stores</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Trekking</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Tour</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Sightseeing</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Many more..</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4 ml-md-4">
                <h2 className="ftco-heading-2">Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Home</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Groom &amp; Bride</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Story</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Greetings</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />People</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Where &amp; When</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />RSVP</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Gallery</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Services</h2>
                <ul className="list-unstyled">
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Organizer</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Venue</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Wedding Ceremony</a></li>
                  <li><a href="#"><span className="icon-long-arrow-right mr-2" />Accomodation</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                    <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                    <li><a href="#"><span className="icon icon-envelope pr-4" /><span className="text">info@yourdomain.com</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
            </div>
          </div>
        </div>
      </footer>
      {/* loader */}
      <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
    </>);
}

const CMS_FAMILIA_QUERY = (familia: string) => `query {
  family(filter: {id: {eq: "${familia}"}}) {
    slug
    codigo
    apellidos
    id
  }
}

`

const CMS_QUERY = (familiaSlug: string) => `query {
  allInvitados(filter: {familia: {eq: "${familiaSlug}"}}) {
    familia {
      apellidos
      codigo
      id
      slug
    }
    nombre
    slug
    id
    aceptado
  }
}`;

const INVITADO_QUERY = (invitadoSlug: string) => `query {
  invitado(filter: {slug: {eq: "${invitadoSlug}"}}) {
    familia {
      apellidos
      codigo
      id
      slug
    }
    nombre
    slug
    id
    aceptado
  }
}`;

IndexPage.getInitialProps = async ({ req, query }): Promise<any> => {
  let autorizado = false;
  const service = new DatoCMSService();
  const invitadoSlug = query ? query.invitado as string : '';
  console.log("invitadoSlug", invitadoSlug)
  const invitadoResult = await service.executeQuery<any>({ query: INVITADO_QUERY(invitadoSlug) });
  const invitado = invitadoResult.invitado;
  console.log("invitado", invitado)

  const familiaData = await service.executeQuery<any>({ query: CMS_FAMILIA_QUERY(invitado.familia.id) });
  console.log("familiaData", familiaData)
  autorizado = !!familiaData && !!familiaData.family;

  let invitadosData: any;
  let burbuja: [];

  if (autorizado) {
    invitadosData = await service.executeQuery<any>({
      query: CMS_QUERY(familiaData.family.id)
    });
    burbuja = autorizado ? invitadosData.allInvitados : [];
  }

  return {
    burbuja,
    invitado,
    familia: familiaData.family,
    autorizado
  }
}

export default IndexPage;