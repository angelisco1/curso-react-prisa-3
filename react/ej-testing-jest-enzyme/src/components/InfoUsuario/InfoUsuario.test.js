import React from 'react';
import { shallow } from 'enzyme';
import InfoUsuario from './InfoUsuario';

describe('InfoUsuario component', () => {
  it('should render a h1 tag with the text "Usuario no logueado" if not logueado', () => {
    const textoEsperado = 'Usuario no logueado'

    const wrapper = shallow(<InfoUsuario />);

    const textoPintado = wrapper.find('h1').text()
    expect(textoPintado).toBe(textoEsperado);
  });

  it('should render a h1 tag with the text "Usuario logueado" if logueado', () => {
    const usuario = 'Ramsay Bolton'
    const textoEsperado = 'Usuario logueado'

    const wrapper = shallow(<InfoUsuario logueado={true} usuario={usuario} />);

    const textoPintado = wrapper.find('h1').text()
    const textoUsuario = wrapper.find('p').text()

    expect(textoPintado).toBe(textoEsperado);
    expect(textoUsuario).toContain(usuario);
  });
});