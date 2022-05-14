const redirectUrl = () => {
    const redirectUri = 'http://127.0.0.1:3000/authorized&code_challenge=QYPAZ5NU8yvtlQ9erXrUYR-T5AGCjCF47vN-KsaI2A8&code_challenge_method=S256';
    return `http://localhost:8080/oauth2/authorize?response_type=code&client_id=client&scope=openid&redirect_uri=${redirectUri}`;
}

export default redirectUrl;