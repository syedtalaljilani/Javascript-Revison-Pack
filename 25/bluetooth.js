const btn = document.querySelector("#btn");
btn.addEventListener("click", ()=>{
    navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
.then(device => device.gatt.connect())
.then(server => {
  // Getting Battery Service…
  return server.getPrimaryService('battery_service');
})
.then(service => {
  // Getting Battery Level Characteristic…
  return service.getCharacteristic('battery_level');
})
.then(characteristic => {
  // Reading Battery Level…
  return characteristic.readValue(); // buffer form
})
.then(value => {
  console.log(`Battery percentage is ${value.getUint8(0)}`); // int form
})
.catch(error => { console.error(error); });
});
// experimental 