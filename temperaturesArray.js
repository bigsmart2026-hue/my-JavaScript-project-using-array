let temperatures = [30, 28, 35, 22, 31]
let highestTemperature = null

for (let i = 0; i < temperatures.length; i++){
     if(temperatures[i] > highestTemperature){
        highestTemperature = temperatures[i]
     }
}
console.log(highestTemperature)