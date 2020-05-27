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
                    <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: `url(${foto.info ? foto.info.url : '/images/about.jpeg' })` }}>
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
                        <div className="timeline-badge" style={{ backgroundImage: `url(${ lv.imagen ? lv.imagen.url :''})` }} />
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

IndexPage.getInitialProps = () => {
  const query = {} as any;
  const invitadoSlug = query ? query.invitado as string : '';
  const familiaSlug = query ? query.familia as string : '';

  const service = new DatoCMSService();
  // const pageResult = await service.executeQuery<any>({
  //   query: `query {
  //     info {
  //       seccionNuestraBoda
  //       seccionConfirmarAsistencia
  //       urlUbicacionWaze
  //       horaInicio
  //       itinerario {
  //         id
  //         titulo
  //         horas
  //         descripcion
  //       }
  //       loveStory {
  //         id
  //         titulo
  //         fecha
  //         descripcion
  //         invertido
  //         imagen {
  //           url
  //         }
  //       }
  //     }
  //     foto {
  //       info {
  //         url
  //         alt
  //       }
  //       principal {
  //         url
  //         alt
  //       }
  //       galeria {
  //         id
  //         url
  //       }
  //     }
  //   }`
  // });

  const invitationType = !!invitadoSlug ? 'inv' : !!familiaSlug ? 'fam' : null;

  let family;
  let invited;
  switch (invitationType) {
    case 'fam':
      // family = await getFamily(familiaSlug);
      break;
    case 'inv':
      // invited = await getInvited(invitadoSlug);
      break;
    default:
      break;
  }

  if (family) {
    // const familyMembers = await getFamilyMembers(family.id);
    // family['members'] = familyMembers || [];
  }

  function setImage(url: string) {
    return {
      url: `/images/boda/${url}`
    }
  }

  const data = {
    invited,
    family,
    foto: {
      principal: setImage('dani-pao-36.jpg'),
      info: setImage('dyp3.jpeg'),
      galeria: []
    },
    info: {
      horaInicio: '4:00 pm',
      seccionNuestraBoda: '<p class="p1">Estamos muy felices de invitarte a compartir una cena &iacute;ntima en familia para celebrar nuestra uni&oacute;n. Sabemos que estamos en tiempos distintos, por lo tanto hemos considerado compartirte estos detalles relevantes para nuestra boda:</p><ol class="ol1"><li class="li1">Celebraremos &uacute;nicamente nuestra ceremonia y cena. No habr&aacute; baile, DJ, ni ninguna actividad que infrinja las recomendaciones de distanciamiento social.</li><li class="li1">Durante la cena los meseros nos servir&aacute;n la comida, de modo que no ser&aacute; estilo buffet.</li><li class="li1">La cantidad de invitados no superar&aacute; el 45% de la capacidad de Estancia Novillo. Por lo tanto, tendremos suficiente espacio para cenar en las respectivas &ldquo;burbujas sociales&rdquo;, seg&uacute;n los permisos del Ministerio de Salud.</li><li class="li1">Nuestros invitados disfrutar&aacute;n de la ceremonia desde las mesas, por lo tanto no habr&aacute; traslados a distintas ubicaciones.</li><li class="li1">Estancia Novillo estar&aacute; reservado &uacute;nica y exclusivamente para nuestra actividad. Adem&aacute;s, consideramos los cuidados sanitarios recomendadas.</li><li class="li1">El horario de restricci&oacute;n vehicular no ser&aacute; un problema ya que hemos planificado el evento tomando en cuenta el tiempo de regreso a sus hogares.</li><li class="li1">Hasta el d&iacute;a de hoy actuamos dentro de los permisos anunciados por el Ministerio de Salud, sin embargo estaremos atentos y sujetos a posibles cambios.</li></ol>',
      urlUbicacionWaze: 'https://waze.com/ul/hd1u0mqtyh ',
      seccionConfirmarAsistencia: '<p class="p1">Valoramos mucho que anticipadamente nos puedan confirmar su asistencia a m&aacute;s tardar el <strong>viernes 29 de mayo.</strong></p><p class="p1">Sin duda, el regalo m&aacute;s valioso que tenemos es compartir nuestra felicidad con ustedes. Si desean apoyarnos con nuestro proyecto de vida, recibiremos con alegr&iacute;a y gratitud cada presente. Hemos dispuesto nuestras cuentas en caso que prefieran bendecirnos con un regalo en efectivo, o tambi&eacute;n pueden optar por nuestra lista de regalos en la tienda SIMAN (Multiplaza Este y Escaz&uacute;).</p><p><strong><em>Colones</em></strong></p><p><em>BAC: 921007704</em></p><p><em><span style="background-color: transparent; font-family: inherit; font-size: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-weight: inherit;">IBAN: CR19010200009210077042</span></em><em><span style="background-color: transparent; font-family: inherit; font-size: inherit; font-variant-ligatures: inherit; font-variant-caps: inherit; font-weight: inherit;"></span></em></p><p><strong><em></em></strong></p><p><strong><em>D&oacute;lares</em></strong></p><p><em>BAC: 937982379</em></p><p><em>IBAN: CR16010200009379823798</em></p><p><em></em></p><p><em>Daniel Montiel Castro, c&eacute;dula 115440553</em></p><p></p><p>Si prefieres ir a SIMAN, el nombre y c&oacute;digo de nuestra lista es: Montiel Bonilla, 121475.</p><p class="p1">&iexcl;Gracias por ser parte de nuestra historia!</p><p class="p1">&nbsp;Daniel y Paola</p>',
      loveStory: [{
        fecha: 'Abril 2016',
        titulo: 'Nos conocimos',
        descripcion: 'Nuestra amistad nació el abril del 2016',
        imagen: setImage('dani-pao-36.jpg')
      }, {
        fecha: 'Enero 2018',
        titulo: 'Nos hicimos novios',
        invertido: true,
        descripcion: '<p>Iniciamos nuestra aventura como novios en el restaurante Ram Luna el 9 de enero del 2018&nbsp;</p>',
        imagen: setImage('dyp3.jpeg')
      }, {
        fecha: '8 de junio 2019',
        titulo: 'Nos comprometimos',
        descripcion: 'Iniciamos nuestra cuenta regresiva.',
        imagen: setImage('dyp3.jpeg')
      }]
    },
    invitationType
  }
  return data
}

export default IndexPage;