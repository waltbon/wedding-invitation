import React from 'react';
import { executePost } from '../lib/api-call';

interface IState {
  sent: boolean;
}

export default class extends React.Component<{
  family: any,
  invited: any,
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
      invitado: this.props.invited,
      aceptado: accepted ? 'Sí aceptó' : 'No aceptó'
    };
    console.log("extends -> sendConfirmation -> data", data);
    await executePost('/api/invitation-confirmation', data);
    this.setState({
      sent: true
    })
  }

  render() {
    const hasMembers = this.props.family && Array.isArray(this.props.family.members) && !!this.props.family.members.length;
    return (
      <div className="pt-4">
        <h5 className="mb-4">Por favor confirma quiénes de la familia {this.props.family.apellidos} asistirán</h5>
        <div className="px-4 mb-5">
          {
            hasMembers && this.props.family.members.map(inv => {
              return (
                <div className="row mb-4 pretty p-icon p-round">
                  <input type="checkbox" name={inv.slug} id={inv.slug} />
                  <div className="state p-success">
                    <i className="icon mdi mdi-check"></i>
                    <label> {inv.nombre}</label>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div>
          <div className="row text-left" hidden={this.state.sent}>
            <button type="button" onClick={(e) => this.sendConfirmation(e, true)} defaultValue="Si" className="btn btn-primary py-3 px-4 mr-3" >Enviar respuesta </button>
          </div>


          <div className="row text-left" hidden={!this.state.sent}>
            <h4>Gracias, hemos recibido tu respuesta!</h4>
          </div>
        </div>
      </div>
    )
  }
}