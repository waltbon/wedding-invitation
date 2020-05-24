import React from 'react';
import { executePost } from '../lib/api-call';

interface IState {
  sent: boolean;
  response: boolean;
}

export default class extends React.Component<{
  family: any,
  invited: any,
}, IState> {
  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.sendConfirmation = this.sendConfirmation.bind(this);
    this.state = {
      sent: false,
      response: true
    }
  }

  onHandleChange(e) {
    // e.preventDefault();
    const { checked, name } = e.target;
    if (name === 'si')
    this.setState({
      response: checked
    });
  }

  async sendConfirmation(e, accepted: boolean) {
    e.preventDefault();
    const confirmation = `${this.state.response ? 'Sí asistirá' : 'No asistirá' }`;
    const data = {
      subject: `${this.props.invited.nombre} ${confirmation.toLowerCase()}`,
      message: `
        ${this.props.invited.nombre} | ${this.props.invited.slug} | ID: ${this.props.invited.id} \n
        ${confirmation}`
    };
    
    await executePost(`${process.env.BASE_API}/api/invitation-confirmation`, data);
    this.setState({
      sent: true
    })
  }

  render() {
    const hasMembers = this.props.family && Array.isArray(this.props.family.members) && !!this.props.family.members.length;
    return (
      <form className="pt-4">
        <h3 className="text-underline text-info">
        {this.props.invited.nombre}! Tu confirmación es muy importante</h3>
        <p className="mb-4"> 
          Por favor confirmanos si podrás acompañarnos marcando o desmarcando la siguiente casilla
        </p>
        <div className="px-4 mb-5">
          <div className="row mb-4 pretty p-icon p-round">
            <input type="checkbox" name="si" id="si" defaultChecked={true} onChange={this.onHandleChange} />
            <div className="state p-success">
              <i className="icon mdi mdi-check"></i>
              <label> Sí, asistiré </label>
            </div>
          </div>
        </div>
        <div>
          <div className="row text-left" hidden={this.state.sent}>
            <button type="button" onClick={(e) => this.sendConfirmation(e, true)} defaultValue="Si" className="btn btn-primary py-3 px-4 mr-3" >Enviar respuesta </button>
          </div>


          <div className="row text-left" hidden={!this.state.sent}>
            <p>Gracias, hemos recibido tu respuesta!</p>
          </div>
        </div>
      </form>
    )
  }
}