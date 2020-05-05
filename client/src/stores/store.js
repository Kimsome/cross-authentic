import { observable, action } from 'mobx';
import axios from 'axios';
import { objectID } from 'bson';

import api from '../util/api';

const APIBASE = 'http://[ip]:3001/';

class store {
    @action async index_post() {
        let params = {};
        const { data } = await api.post(APIBASE);
        console.log(data);
    }
}

export default new store();