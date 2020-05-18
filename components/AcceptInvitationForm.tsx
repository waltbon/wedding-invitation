import React from 'react';
import { executePost } from '../lib/api-call';

interface IState {
  invitados: any[];
  respuestas: {
    id: string;
    nombre: string;
    aceptado: boolean;
  }[];
  data: {
    familia: any;
  }
}

export default class extends React.Component<{
  invitados: any[],
  familia: any
}, IState> {
  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.state = {
      invitados: props.invitados,
      respuestas: props.invitados.map(inv => {
        return {
          id: inv.id,
          nombre: inv.nombre,
          aceptado: false
        }
      }),
      data: {
        familia: props.familia,
      }
    } 
  }

  onHandleChange(e) {
    const { name, value, checked } = e.target;
    console.log("extends -> onHandleChange -> e.target", e.target);

    const { respuestas } = this.state;
    const invitado = respuestas.find(inv => inv.id === name);
    invitado.aceptado = checked;
    this.setState({
      respuestas
    });
    console.log("extends -> onHandleChange -> this.state.invitados", this.state.respuestas);
  }
  
  async onHandleSubmit(e) {
    e.preventDefault();
    const data = {
      respuestas: this.state.respuestas,
      familia: this.state.data.familia
    };
    console.log("extends -> onHandleSubmit -> data", data)
    
    await executePost('/api/invitation-confirmation', data);
  }




  render() {
    return (
      <form className="rsvp-form ftco-animate" noValidate onSubmit={this.onHandleSubmit}>
        <div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Your email" />
          </div>
        </div>
        <div>
          <div className="form-group">
            {
              Array.isArray(this.props.invitados) && this.props.invitados.map(inv => {
                return (
                <div key={inv.id}>
                  <input onChange={this.onHandleChange} type="checkbox" defaultChecked={inv.aceptado} id={inv.id} name={inv.id} value={inv.id} />
                  <label htmlFor={inv.id}> {inv.nombre}</label>
                  <br />
                </div>)
              })
            }
          </div>
        </div>
        <div>
          <div className="form-group">
            <textarea name="message" cols={30} rows={2} className="form-control" placeholder="Message" defaultValue={""} />
          </div>
          <div className="form-group">
            <button type="submit" defaultValue="Enviar confirmación" className="btn btn-primary py-3 px-4" >Enviar invitation</button>
          </div>
        </div>
      </form>
    )
  }
}