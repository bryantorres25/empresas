import Service from "./Service";
const baseurl = '/api/configuracion-formularios';
export default {
    index() {
        return Service.get(`${baseurl}`);
    },
    store(obj) {
        return Service.post(`${baseurl}/store`, obj);
    },
    show(id) {
        return Service.get(`${baseurl}/show/${id}`);
    },
    update(obj) {
        return Service.put(`${baseurl}/update`, obj);
    },
    delete(id) {
        return Service.delete(`${baseurl}/delete/${id}`);
    },
    showId(id) {
        return Service.get(`${baseurl}/showId/${id}`);
    },
}