import React from 'react';
import Particles from 'react-particles-js';
import Background from '../images/Amassado.jpg';

const LandingPage = () => (
  <div className='Landing-header'>
    <h1>Simulaê!</h1>
    <h2>Preparado para toda prova a qualquer hora</h2>
    <Particles
      params={{
        'particles': {
            'number': {
                'value': 160
            },
            'size': {
                'value': 4
            },
            'color': {
              'value': '#003'
            },
            'line_linked': {
              'color': '#003',
              'width': '2'
            }
        },
        'interactivity': {
            'events': {
                'onhover': {
                    'enable': true,
                    'mode': 'grab'
                },
                'onclick': {
                  'enable': true,
                  'mode': 'push'
                }
            }
        }
    }}
    />


  </div>
);


export default LandingPage;
