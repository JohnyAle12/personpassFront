import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
  
  const navigate = useNavigate();

  const onGoPocket = () => {
    navigate('/pocket')
  }

  return (
    <div className="wrapper fadeInDown">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card text-center">
              <div className="card-header">
                Mi cuenta
              </div>
              <div className="card-body">
                <h5 className="card-title mb-5">Bienvenido</h5>
                <div className="row mb-3">
                  <div className="col-6">
                    <h6 className="card-title">Disponible</h6>
                    <h4 className="card-text">$150.000,<small>00</small></h4>
                  </div>
                  <div className="col-6">
                    <h6 className="card-title">Total</h6>
                    <h4 className="card-text">$350.000,<small>00</small></h4>
                  </div>
                </div>
                <a href="#" className="btn btn-primary btn-sm m-2">Transferir</a>
                <a href="#" onClick={onGoPocket} className="btn btn-primary btn-sm m-2">Bolsillo</a>
                <a href="#" className="btn btn-primary btn-sm m-2">Movimientos</a>
                <a href="#" className="btn btn-primary btn-sm m-2">Ajustes</a>
              </div>
              <div className="card-footer text-muted"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
