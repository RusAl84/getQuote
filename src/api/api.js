import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:5000',
})

export default class API {
    static async sendMessage(text) {
        const resp = await axios.post(`/ke`, {
            text: text
        })
        return resp.data
    }
}