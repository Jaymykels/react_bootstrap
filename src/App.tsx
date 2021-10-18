import React, { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import Layout from './components/layout'
// import Slider from './components/slider'
import promo2 from './assets/promo-2.jpg'
import promofull from './assets/promo-full-1.jpg'

function App() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <Layout>
      <div className="slider">
        {/* <Slider/> */}
          <Row className="mt-4">
            {
              Array.from({length: 8}, (_, i) => (
                <Col md={3}>
                  <div className="card bg-dark text-white mb-4">
                    <img src={promo2} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                      <div className="card-img-content">
                        <h4 className="card-img-title">GET €1000 IN BONUSES & 1000 FREE SPINS</h4>
                        <div className="card-img-subtitle">Receive up to €100 for free when making your first deposit & you get 1000 free spins</div>
                        <button className="card-img-button mt-2" onClick={() => setLgShow(true)}>MORE INFO</button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            }
          </Row>      
      </div>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body className="p-0">
          <div className="modal-img-header">
            <img src={promofull} className="modal-img" alt="..."/>
            <div className="card-img-overlay">
              <div className="card-img-content d-flex justify-content-between px-4">
                <div>
                  <h4 className="modal-img-title">GET €1000 IN BONUSES & 1000 FREE SPINS</h4>
                  <div className="modal-img-subtitle">Receive up to €100 for free when making your first deposit & you get 1000 free spins</div>
                </div>
                <button className="modal-img-button px-4 my-2 float-end" onClick={() => setLgShow(true)}>ACTIVATE</button>
              </div>
            </div>
          </div>
          <div className="p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida enim diam, et scelerisque sem egestas quis. In ac purus bibendum, pulvinar lorem quis, sagittis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at enim bibendum odio fermentum semper. Phasellus ipsum dolor, interdum vitae consequat in, bibendum sit amet elit. Phasellus scelerisque urna at pharetra blandit. Maecenas ultricies, sem vel laoreet accumsan, sem tellus convallis ligula, aliquet consequat urna nisi ac erat. Duis non efficitur magna, id sagittis leo. Praesent congue, lectus eu mollis mattis, leo sem maximus ante, ut rhoncus enim enim id sapien.

Aenean maximus erat sit amet nulla accumsan, in dictum urna vehicula. Donec finibus aliquet dolor, ut interdum mi sodales in. Nulla ut dapibus dolor, non semper dui. Sed neque erat, laoreet eu egestas ut, venenatis et arcu. Maecenas dapibus quis orci sed tincidunt. Vestibulum tincidunt tristique sapien in malesuada. Nunc aliquam quis lorem malesuada vestibulum. Aliquam suscipit iaculis arcu, semper cursus odio dictum eu. Donec sed eros id eros ultricies auctor sit amet non magna. Duis at massa vitae erat rhoncus mattis. Aliquam ultricies, neque ullamcorper finibus ultricies, neque est convallis risus, sit amet commodo dui est molestie massa. Aenean eu sollicitudin ante. Fusce luctus augue ipsum, quis sodales nunc blandit at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed a bibendum augue.

Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc hendrerit, nulla non condimentum feugiat, nisl ligula euismod dui, sit amet fermentum erat arcu ut neque. Aliquam tempor congue tortor, vitae hendrerit lacus dignissim ullamcorper. Donec scelerisque ac turpis non rhoncus. Integer orci dui, tempor eget urna eget, maximus cursus ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam cursus tellus sit amet arcu tristique, a feugiat tellus volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sed dui volutpat, interdum quam eu, faucibus lacus.

Mauris metus justo, tristique vitae imperdiet sed, congue eu felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam quis semper tortor, in viverra neque. In nec lacinia nulla, sed viverra turpis. Sed tristique rhoncus arcu non gravida. Mauris rhoncus consequat justo, nec rutrum augue rutrum vitae. Proin sit amet mollis est. In in gravida lacus, id aliquam nunc. Praesent interdum ante arcu, sit amet ultricies nisi consequat eget.

Nulla maximus suscipit nunc, sollicitudin lacinia dui. Vestibulum pretium at velit non molestie. Maecenas scelerisque vitae lorem tristique varius. Etiam at nisl aliquam, egestas tortor sit amet, mollis nibh. Donec nec risus non quam pulvinar bibendum suscipit quis sem. Nulla ut accumsan est, at laoreet urna. Nunc posuere ut dolor ut ornare. In lacinia viverra dui at posuere.
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  )
}

export default App;
