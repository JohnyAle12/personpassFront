import React, { useEffect } from 'react'

export const Dashboard = () => {
  
  return (
    <div className="wrapper fadeInDown">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card text-center">
              <div className="card-header">
                <ul className="nav nav-pills card-header-pills">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">Mi cuenta</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Ajustes</a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-6">
                    <h5 className="card-title">Disponible</h5>
                    <h4 className="card-text">$150.000,<small>00</small></h4>
                  </div>
                  <div className="col-6">
                    <h5 className="card-title">Total</h5>
                    <h4 className="card-text">$350.000,<small>00</small></h4>
                  </div>
                </div>

                <a href="#" className="btn btn-primary m-2">Transferir</a>
                <a href="#" className="btn btn-primary m-2">Bolsillo</a>
                <a href="#" className="btn btn-primary m-2">Movimientos</a>
              </div>
              <div className="card-footer text-muted"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
