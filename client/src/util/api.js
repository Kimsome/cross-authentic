import axios from 'axios';

class api {
    token = '';
    setToken(token) {
        this.token = token;
    }

    async post(url, params) {
        var params = new URLSearchParams(params);
        params.append("token", this.token);

        const data = await axios.post(url, params);
        console.log(data.data);

        if (data.data && data.data.error && data.data.error == '-NOTLOGIN-') window.location = '/login';

        return data;
    }
}

export default new api();