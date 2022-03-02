import BlynkService from "../../domain/service/BlynkService";

class BlynkHandler {
    async writePinValue(pin:string,value:string){
        await BlynkService.writePinValue(pin,value)
    }
}

export default new BlynkHandler()