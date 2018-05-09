import {Injectable} from "@angular/core";
import {Http} from "@angular/http"

@Injectable()
export class sensorDataService {

  constructor(private http: Http) {}

  // TODO : Implement function to send data to backend
  prepareSensorData() {
    return {
      "model_name": this.sensorBasicData[this.sensorBasicData.length -1].sensorModelName,
      "display_name": this.sensorBasicData[this.sensorBasicData.length -1].sensorDisplayName,
      "time_required_to_one_sensor_read": this.sensorBasicData[this.sensorBasicData.length -1].sensorReadTime,
      "standby_current": this.sensorBasicData[this.sensorBasicData.length -1].sensorStandbyCurrent,
      "active_current": this.sensorBasicData[this.sensorBasicData.length -1].sensorActiveCurrent,
      "voltage": this.sensorBasicData[this.sensorBasicData.length -1].sensorVoltage,
      "description": this.sensorBasicData[this.sensorBasicData.length -1].sensorDescription,
      "color": "",

      "pin_map":this.prepareSensorPinMap(this.sensorPinData[this.sensorPinData.length -1]),
      "configuration":this.prepareSensorConfiguration(this.sensorPinData[this.sensorPinData.length -1]),

      "cpp_includes":'esp8266' == this.sensorFunctionData[this.sensorFunctionData.length -1].microcontrollerType ?
          this.sensorFunctionData[this.sensorFunctionData.length -1].headerFiles:'',
      "cpp_global":'esp8266' == this.sensorFunctionData[this.sensorFunctionData.length -1].microcontrollerType ?
        this.sensorFunctionData[this.sensorFunctionData.length -1].GlobalVariables:'',
      "cpp_function":'esp8266' == this.sensorFunctionData[this.sensorFunctionData.length -1].microcontrollerType ?
          this.sensorFunctionData[this.sensorFunctionData.length -1].readingFunction:'',
      "cpp_initialize":'esp8266' == this.sensorFunctionData[this.sensorFunctionData.length -1].microcontrollerType ?
          this.sensorFunctionData[this.sensorFunctionData.length -1].initializeFunction:''

    };
  }

  addSensorToBackend () {
    let sensor = this.prepareSensorData();

    // alert('Sensor Added Successfully');
    this.http.post('http://localhost:8090/sensors', sensor).subscribe(
      (response) => {console.log(response); alert('Sensor Added Successfully')},
      (error) => console.log(error)
    );

  }

  prepareSensorPinMap(pinArray) {
    let configuration = '';
    for (let pin of pinArray.Pins){
      configuration += pin.pinType+'-'+pin.numberOfPins+',';
    }
    return configuration.substring(0, configuration.length -1)
  }

  prepareSensorConfiguration(pinArray) {
    let configuration = '';
    let numberOfDigital = 0;
    let numberOfAnalog = 0;

    for (let pin of pinArray.Pins){

      if(pin.pinType == 'DIGITAL_INPUT'){
        numberOfDigital += 1;
      }

      if(pin.pinType == 'ANALOG_INPUT'){
        numberOfAnalog += 1;
      }

    }

    if(numberOfDigital != 0){
      configuration += 'DIGITAL_INPUT-'+numberOfDigital+',';
    }
    if(numberOfAnalog != 0){
      configuration += 'DIGITAL_INPUT-'+numberOfAnalog+',';
    }

    return configuration.substring(0, configuration.length -1);
  }



  // References to newly added components to DOM
  pinsArray = [];

  //References to newly added function set components
  functionSetArray = [];

  // Added Pin Details of sensor
  sensorPinData = [];

  // Sensor Basic Data
  sensorBasicData = [];

  //sensor function data
  sensorFunctionData = [];


  // Get Sensor Basic Data
  getSensorBasicData (object: any) {
    this.sensorBasicData.push(
      {
        "sensorVoltage": object.sensorVoltage,
        "sensorStandbyCurrent": object.sensorStandbyCurrent,
        "sensorActiveCurrent": object.sensorActiveCurrent,
        "sensorReadTime":object.sensorReadTime,
        "sensorDescription": object.sensorDescription,
        "sensorDisplayName": object.sensorDisplayName,
        "sensorModelName": object.sensorModelName
      }
    );
  }

  getSensorPinData (object: any) {
    this.sensorPinData.push(object);
  }

  getSensorFunctionData (object: any) {
    this.sensorFunctionData.push(object)
    console.log(this.sensorFunctionData[this.sensorFunctionData.length -1].headerFiles)
  }

}
