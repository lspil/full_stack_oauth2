const tokenUrl = (code: string) => {
    const redirectUrl = `http://127.0.0.1:3000/authorized&grant_type=authorization_code&code=${code}&code_verifier=qPsH306-ZDDaOE8DFzVn05TkN3ZZoVmI_6x4LsVglQI`;
    return `http://localhost:8080/oauth2/token?client_id=client&redirect_uri=${redirectUrl}`;
};

export default tokenUrl;