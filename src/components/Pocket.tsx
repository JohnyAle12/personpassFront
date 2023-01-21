import { useNavigate } from 'react-router-dom';

export const Pocket = () => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1)
  }

  return (
    <div className="wrapper fadeInDown">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card text-center">
                <div className="card-header">
                  Bolsillo
                </div>
                <div className="card-body">
                    <h6 className="card-title">Disponible</h6>
                    <h4 className="card-text">$150.000,<small>00</small></h4>
                    <a href="#" onClick={onGoBack} className="btn btn-primary btn-sm m-2">Atras</a>
                    <a href="#" className="btn btn-primary btn-sm m-2">Agregar fondos</a>
                    <a href="#" className="btn btn-primary btn-sm m-2">Eliminar</a>
                </div>
              <div className="card-footer text-muted"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
