
const array = process.argv.slice(2)
const arr = array[0].split("-")

const currentDate = new Date();
const dayOfMonth = currentDate.getDate();

if(2023 >= arr[0] && 10 >= arr[1]){
    if(10 < arr[1]) console.log((2023 - arr[0]) - 1);
    else if(10 == arr[1]){
        if(dayOfMonth > arr[2]) console.log((2023 - arr[0]) - 1);
        else console.log(2023 - arr[0]);
    }else console.log(2023 - arr[0]);
}else console.log("You are not born yet");
