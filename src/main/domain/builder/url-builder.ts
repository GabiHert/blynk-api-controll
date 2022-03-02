import PROPERTIES from "../../application/config/properties";

class UrlBuilder{
    buildWritePinValueUrl(pin:string):string{
        const url = PROPERTIES.BLYNK.URL.replace("{auth_token}",PROPERTIES.BLYNK.AUTH_TOKEN).replace("{pin}",pin)

        return url
    }
}

export default new UrlBuilder()