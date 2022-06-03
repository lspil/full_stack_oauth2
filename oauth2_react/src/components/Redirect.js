import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { authorize } from "../links/authorize";
import { token } from "../links/token";
import { Buffer } from "buffer";

const Redirect = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(searchParams?.get('code')){
            const code = searchParams?.get('code');
            const client = 'client';
            const secret = 'secret';
            const headers = new Headers();
            headers.append('Content-type', 'application/json');
            headers.append('Authorization', `Basic ${Buffer.from(`${client}:${secret}`).toString('base64')}`);

            const url = token(code);
            fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers
            }).then(async (response) => {
                const token = await response.json();
                if(token?.id_token) {
                    sessionStorage.setItem('id_token', token.id_token);
                    navigate('/home');
                }
            }).catch((err) => {
                console.log(err);
            })
        } else if(!searchParams?.get('code')){
            window.location.href = authorize();
        }
    }, []);
    return <p>Redirecting ...</p>
}

export default Redirect;