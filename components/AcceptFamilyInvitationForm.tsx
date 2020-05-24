import React from 'react';
import { executePost } from '../lib/api-call';

interface IState {
  sent: boolean;
  members: [{
    id: string;
    slug: string;
    name: string;
    accepted: boolean;
  }]
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
      members: this.props.family.members.map(m => {
        return {
          id: m.id,
          slug: m.slug,
          name: m.nombre,
          accepted: true
        }
      })
    }
  }

  onHandleChange(e) {
    const { name, checked } = e.target;
    const {members} = this.state; 
    const member = members.find(m => m.id === name);
    member.accepted = checked;
    this.setState({
      members
    });
  }

  async sendConfirmation(e, accepted: boolean) {
    e.preventDefault();
    const message = this.state.members.map(m => `${m.name} | ${m.slug} | ${m.id} | ${m.accepted ? 'Sí asistirá': 'No asistirá'}`).join('\n\n')
    const data = {
      subject: `Familia ${this.props.family.apellidos} ha respondido`,
      message
    };
    await executePost(`${process.env.BASE_API}/api/invitation-confirmation`, data);
    this.setState({
      sent: true
    })
  }

  render() {
    const hasMembers = this.props.family && Array.isArray(this.props.family.members) && !!this.props.family.members.length;
    return (
      <div className="pt-4">
        <h3 className="text-underline text-info">
        Familia {this.props.family.apellidos}! Tu confirmación es muy importante</h3>
        <p className="mb-4"> 
          Por favor confirmanos quienes podrán acompañarnos marcando o desmarcando la opción 
        </p>
        <div className="px-4 mb-5">
          {
            hasMembers && this.state.members.map(inv => {
              return (
                <div className="row mb-4 pretty p-icon p-round" key={inv.id}>
                  <input type="checkbox" name={inv.id} id={inv.id} defaultChecked={true} onChange={this.onHandleChange} />
                  <div className="state p-success">
                    <i className="icon mdi mdi-check"></i>
                    <label> {inv.name}</label>
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
            <p>Gracias, hemos recibido tu respuesta!</p>
          </div>
        </div>
      </div>
    )
  }
}