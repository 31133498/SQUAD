import { v2 } from "cloudinary";

v2.config({
    api_key: '',
    api_secret: '',
    cloud_name: ''
})

export { v2 as cloudinary }