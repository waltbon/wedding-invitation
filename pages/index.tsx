import { NextPage } from 'next';
import { DatoCMSService } from '../lib/dato-cms.service';
import AcceptInvitationForm from '../components/AcceptFamilyInvitationForm';
import Navigation from '../components/Navigation';
import AccepSingleInvitationForm from '../components/AccepSingleInvitationForm';

const IndexPage: NextPage<any> = ({ family, invited, info, foto, invitationType }) => {
  return (
    <>
      <Navigation />
      <section id="home" className="video-hero js-fullheight" style={{ height: '700px', backgroundImage: `url(${foto.principal.url})`, backgroundSize: 'cover', backgroundPosition: 'top center' }} data-stellar-background-ratio="0.5">
        <div className="overlay" />
        {/* <a className="player" data-property="{videoURL:'https://www.youtube.com/watch?v=Mjjw19B7rMk',containment:'#home', showControls:false, autoPlay:true, loop:true, mute:true, startAt:0, opacity:1, quality:'default',optimizeDisplay:true}" /> */}
        {/* <span></span> */}
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
      <section className="ftco-section ftco-about ftco-no-pt ftco-no-pb" id="info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="wrap">
                <div className="row d-flex">
                  <div className="col-md-6 d-flex">
                    <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: `url(${foto.info ? foto.info : '/images/about.jpeg' })` }}>
                    </div>
                  </div>
                  <div className="col-md-6 py-md-5 text">
                    <div className="py-md-4">
                      <div className="row justify-content-start pb-3">
                        <div className="col-md-12 ftco-animate p-4 p-lg-5 text-center">
                          <span className="subheading mb-4">
                            {
                              invited && invited.nombre &&
                              <span className="text-secondary">{invited.nombre} </span>
                            }
                            Te invitamos a nuestra boda </span>
                          <h2 className="mb-4 text-capitalize">Montiel Bonilla</h2>
                          <span className="icon flaticon-rose-variant-outline-with-vines" />
                          <span className="subheading">Que se celebrará el</span>
                          <p className="time mb-4"><span>19 junio, 2020</span></p>
                          <span className="subheading mb-5">Inicio {info.horaInicio}</span>
                          <a href={info.urlUbicacionWaze}>
                          <span className="subheading">
                            <i className="mdi mdi-map-marker"></i>Estancia Novillo, Escazú (ver en Waze)
                          </span>
                          </a>
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
      <section id="nuestra-boda" className="ftco-section bg-section" style={{ marginBottom: 0, paddingBottom: '60px !important' }}>
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
                  <div dangerouslySetInnerHTML={{ __html: info.seccionNuestraBoda }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="confirmar" className="ftco-section bg-light">
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
                  <div dangerouslySetInnerHTML={{ __html: info.seccionConfirmarAsistencia }}></div>
                  {
                    invitationType === 'fam' &&
                    <AcceptInvitationForm family={family} invited={invited} />
                  }
                  {
                    invitationType === 'inv' &&
                    <AccepSingleInvitationForm family={family} invited={invited} />
                  }
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
              <h2 className="mb-3">Love Story</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline animate-box">
                {
                   info.loveStory && Array.isArray(info.loveStory) && info.loveStory.map(lv => {
                     return (
                      <li key={lv.id} className={lv.invertido ? "timeline-inverted animate-box" : "animate-box"}>
                        <div className="timeline-badge" style={{ backgroundImage: `url(${lv.imagen.url})` }} />
                        <div className="timeline-panel ftco-animate text-md-right">
                          <div className="overlay" />
                          <div className="timeline-heading">
                            <span className="date">{lv.fecha}</span>
                            <h3 className="timeline-title">{lv.titulo}</h3>
                          </div>
                          <div className="timeline-body">
                            <div dangerouslySetInnerHTML={{ __html: lv.descripcion }}></div>
                          </div>
                        </div>
                      </li>
                     )
                   })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section" id="gallery-section">
        <div className="container-fluid px-md-4">
          <div className="row justify-content-center pb-5">
            <div className="col-md-12 text-center heading-section ftco-animate">
              <h2 className="mb-3">Galería</h2>
            </div>
          </div>
          <div className="row">
            {
              foto && Array.isArray(foto.galeria) && foto.galeria.map(f => {
                return (
                <div key={f.id} className="col-md-3 ftco-animate">
                  <a href={f.url} className="gallery img image-popup d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${f.url})` }}>
                    <div className="icon d-flex align-items-center justify-content-center"><span className="ion-ios-image" /></div>
                  </a>
                </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <footer className="ftco-footer ftco-section">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Los esperamos <i className="icon-heart color-danger" aria-hidden="true" /> 
                <br/>
                <a href={info.urlUbicacionWaze}>
                  <i className="mdi mdi-map-marker"></i> Estancia Novillo, Escazú <br/>
                  <img src="/images/waze.png" alt="waze" width="60px"/>
                </a>
                  
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
            </div>
          </div>
        </div>
      </footer>
      {/* loader */}
      <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx={24} cy={24} r={22} fill="none" strokeWidth={4} stroke="#eeeeee" /><circle className="path" cx={24} cy={24} r={22} fill="none" strokeWidth={4} strokeMiterlimit={10} stroke="#F96D00" /></svg></div>
    </>);
}

const getFamily = async (familiaSlug: string) => {
  const service = new DatoCMSService();
  const result = await service.executeQuery<any>({
    query: `query {
    family(filter: {slug: {eq: "${familiaSlug}"}}) {
      slug
      codigo
      apellidos
      id
    }
  }`});

  return result.family;
};

const getInvited = async (invitadoSlug: string) => {
  const service = new DatoCMSService();
  const invitadoResult = await service.executeQuery<any>({
    query: `query {
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
    }`
  });
  const invitado = invitadoResult.invitado;
  return invitado;
}

const getFamilyMembers = async (familyId: string) => {
  const service = new DatoCMSService();
  const result = await service.executeQuery<any>({
    query: `query {
      allInvitados(filter: {familia: {eq: "${familyId}"}}) {
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
    }`
  });
  return result.allInvitados;
}

IndexPage.getInitialProps = async ({ req, query }): Promise<any> => {
  const invitadoSlug = query ? query.invitado as string : '';
  const familiaSlug = query ? query.familia as string : '';

  const service = new DatoCMSService();
  const pageResult = await service.executeQuery<any>({
    query: `query {
      info {
        seccionNuestraBoda
        seccionConfirmarAsistencia
        urlUbicacionWaze
        horaInicio
        itinerario {
          id
          titulo
          horas
          descripcion
        }
        loveStory {
          id
          titulo
          fecha
          descripcion
          invertido
          imagen {
            url
          }
        }
      }
      foto {
        info {
          url
          alt
        }
        principal {
          url
          alt
        }
        galeria {
          id
          url
        }
      }
    }`
  });

  const invitationType = !!invitadoSlug ? 'inv' : !!familiaSlug ? 'fam' : null;

  let family;
  let invited;
  switch (invitationType) {
    case 'fam':
      family = await getFamily(familiaSlug);
      break;
    case 'inv':
      invited = await getInvited(invitadoSlug);
      break;
    default:
      break;
  }

  if (family) {
    const familyMembers = await getFamilyMembers(family.id);
    family['members'] = familyMembers || [];
  }

  const data = {
    invited,
    family,
    foto: pageResult.foto,
    info: pageResult.info,
    invitationType
  }
  return data;
}

export default IndexPage;