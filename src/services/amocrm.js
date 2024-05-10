import axios from "axios"

const amocrmService = {
    getAccessToken(dataJson) {
        return axios.get('https://izzatbekmajidov2006.amocrm.ru/api/v4/leads', {
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'amoCRM-oAuth-client/1.0',
                'Authorization': 'Bearer def50200ebd73fda91fa3886a0905757ae1101373ea90a6930837311ff146ef4668bca589012450fbaeab693d83fbd404b38a927f7346c21f64e6eed0e9e04f0822ff87ef9ae007646b5fb7e6542eb2fd66021b1514dfc5381cfa156a9da824ddea1582e09866966f3c8fc9537ea70dadc7cdb401f70de515c3588bf9cbf964657285fe3c11e71361a8a92b9c6bae333fd731576dfb2d6f7373c5e910f5aba2e7c66ccbecb50b2fd79ced928e4e43b569c505d76b743959062300d111c3d84586cafcc3e936ba0b173eab5e58c72a7c2c7ad4b6be4170f5878f45e5eed1804d640006d0183ef8f1d768f14c6fc58a2e228ac380135c0664713500d7970321ec7fbd081310a9c5f60613963a5e7f4e5692706bf1fbcca233e2515a45d53beacf274e8fe36e2bfa123b9bd887f6f432cd9b2b469ed792152c2e0f2c4179908d4fe45183a223a48804e34c5d6549e111ba125f48ca63cfbe2da893cf772ba5eb917aada1d1a55192232b2d5f51429a3b1cebadd580dd8baa7ad33ada3f01b4a32a327b3bba979ab522d87985ab950d13225a8e07258fb17d98b73c619f1211a06bbe89fa373911307ef4c4e39a496d48cbc03583c2f2cfd4a90bf2649822eaffe95c585302cb9742940279e43ec9f5102abc24b4a98de2bb214a4fda9b3cae4b6c3a3bc0c6b6030cfb5a6d6640fca31eba445d059437e074f18c71ab935'
            }
        })
    },
}

export default amocrmService