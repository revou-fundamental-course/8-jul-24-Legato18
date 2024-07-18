//ini js
{

 function updateResult(){
     let weightValue = document.getElementById('input-berat-badan').value;
     let heightValue = document.getElementById('input-tinggi-badan').value;
     let result = document.getElementById('bmi-result').value;
     console.log(weightValue);
         weightValue != null && weightValue != ''
         ? document.getElementById('bmi-result').innerHTML = result
         : alert('Masukkan berat badan!')
     console.log(heightValue);
         heightValue != null && heightValue != ''
         ? document.getElementById('bmi-result').innerHTML = result
         : alert('Masukkan tinggi badan!')
     console.log(result);
     let bmi = ((weightValue) / ((heightValue*heightValue) / 10000));
   
     if (bmi < 18.5) {
        result = "Underwight";
       } else if (18.5 <= bmi && bmi <= 29.9) {
         result = "Overweight";
       } else if (30 <= bmi && bmi <= 34.9) {
         result = "Obese";
       } else if (35 <= bmi) {
         result = "Extremely Obese";
       }
}

//     let button = document.getElementById('button submit');
//     button.addEventListener('click'), () =>{
//       let heightValue = parseInt(document.getElementById('input-tinggi-badan').value);
//       let weightValue = parseInt(document.getElementById('input-berat-badan').value);
//       let resultValue = document.getElementById('bmi-result');
//       let height_status=false, weight_status=false;
    

//       if(heightValue === '' || isNaN(heightValue) || (heightValue <= 0)){
//         document.getElementById('height_error').innerHTML = 'Masukkan tinggi badan!';
//       }else{
//         document.getElementById('height_error').innerHTML = '';
//         height_status=true;
//       }

//       if(weightValue === '' || isNaN(weightValue) || (weightValue <= 0)){
//         document.getElementById('weight_error').innerHTML = '';
//         weight_status=true;
//       }else{
//         document.getElementById('weight_error').innerHTML = '';
//         weight_status=true;

//       if(height_status && weight_status){
//         const bmi = (weightValue / ((heightValue*heightValue)/10000)).toFixed(2);

//         if(bmi < 18.6){
//           resultValue.innerHTML = 'Under weight : ' + bmi;
//         }else if(bmi >= 18.6 && bmi < 24.9){
//           resultValue.innerHTML = 'Normal : ' + bmi;
//         }else{
//           resultValue.innerHTML = 'Over weight : ' + bmi; 
//         }
//       }else{
//         alert('Pengisian error');
//         resultValue.innerHTML = '';
//       }
//   }
// }
}