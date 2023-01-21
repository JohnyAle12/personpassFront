import { useForm } from '../hooks/useForm';
import reactLogo from './../assets/react.svg'
import { useContext, useState } from 'react';
import loginService from '../services/loginService';
import { useNavigate } from 'react-router-dom';
import { ContextApp } from '../types/ContextApp';
import { UserContext } from '../context/UserContext';

export const Login = () => {

    const navigate = useNavigate();
    const { setUser } = useContext<ContextApp>(UserContext);
    const [loginFailed, setLoginFailed] = useState<boolean>(false);

    const { email, password, onInputChange} = useForm({
        email: '',
        password: ''
    });
    
    const onLoginSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = await loginService({email, password})
        if(!user){
            setLoginFailed(true);
            return;
        }

        setUser(user);
        navigate('/dashboard', {replace: true});
    }

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <div className="m-4">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                        <h3 id="titleLogin">Pocket Money</h3>
                    </div>
                </div>

                <form onSubmit={onLoginSubmit}>
                    <input
                        type="text"
                        className="fadeIn second"
                        name="email"
                        placeholder="Correo electrónico"
                        autoComplete="off"
                        value={email}
                        onChange={onInputChange}
                    />
                    <input
                        type="password"
                        className="fadeIn second"
                        name="password"
                        placeholder="Contraseña"
                        autoComplete="off"
                        value={password}
                        onChange={onInputChange}
                    />
                    <input type="submit" className="fadeIn fourth" value="Iniciar sesión" />

                    {loginFailed && (
                        <div className="alert alert-danger" role="alert">
                            Error al intentar autenticar
                        </div>
                    )}
                </form>

                <div id="formFooter"></div>
            </div>
        </div>
    )
}
