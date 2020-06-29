import React from 'react'

export const withData = (CmpWrapped, url, CmpLoader) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        datosCargados: false,
        datosRecibidos: null
      }
    }

    componentDidMount() {
      fetch(url)
        .then(resp => resp.json())
        .then(datos => {


          setTimeout(() => {
            this.setState({
              datosCargados: true,
              datosRecibidos: datos
            })
          }, 2000)


        })
    }

    render() {
      const {datosRecibidos, datosCargados} = this.state;
      const loader = CmpLoader ? <CmpLoader /> : <p>Loading...</p>;

      return (
        <React.Fragment>
          {datosCargados ? <CmpWrapped {...this.props} datos={datosRecibidos} /> : loader}
        </React.Fragment>
      )
    }
  }
}