import React from 'react';
import { executePost } from '../lib/api-call';

interface IState {
  sent: boolean;
}

export default class extends React.Component<{
  burbuja: any[],
  invitado: any,
}, IState> {
  constructor(props) {
    super(props);
    this.sendConfirmation = this.sendConfirmation.bind(this);
    this.state = {
      sent: false
    }
  }

  async sendConfirmation(e, accepted: boolean) {
    e.preventDefault();
    const data = {
      invitado: this.props.invitado,
      aceptado: accepted ? 'Sí' : 'No'
    };
    console.log("extends -> sendConfirmation -> data", data);
    // await executePost('/api/invitation-confirmation', data);
    this.setState({
      sent: true
    })
  }




  render() {
    return (
      <div className="pt-4">
        <h5>Burbuja asignada</h5>
        <p className="pb-4">
          {
            Array.isArray(this.props.burbuja) && this.props.burbuja.map(inv => {
            return (
              <span style={{ paddingRight: 12 }}>{inv.nombre} <br/> </span>
            )
            })
          }
        </p>
        <div>
          <div className="row text-left" hidden={this.state.sent}>
            <div className="col-sm-12">
              <button type="button" onClick={(e) => this.sendConfirmation(e, true)} defaultValue="Si" className="btn btn-success py-3 px-4 mr-3" >Confirmo asistencia</button>
              <button type="button" onClick={(e) => this.sendConfirmation(e, false)} defaultValue="No" className="btn btn-danger py-3 px-4" >No asistiré</button>
            </div>
          </div>


          <div className="row text-left" hidden={!this.state.sent}>
            <h4>Gracias, hemos recibido tu respuesta!</h4>
          </div>
        </div>
      </div>
    )
  }
}