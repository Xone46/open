import axios from 'axios'

const HOST = "http://localhost:3000";

class ClientService {

    // select Client
    // Read Client
    static getClients() {
        return new Promise((resolve, reject) => {

            axios.get(HOST+"/clients/show")
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });

        })
    }
    // create Client 
    // update Client
    // Delete Client


}

export default ClientService;