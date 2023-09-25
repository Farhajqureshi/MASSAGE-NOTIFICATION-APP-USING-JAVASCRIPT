
let toastBox = document.getElementById('toastBox')
console.log(toastBox);

let successMsg = '<i class="fa-solid fa-circle-check"></i> Sucessfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please Fix Your Error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i>Invalid Input, Check Again?';

const showFunction = (msg) => {
         const toast = document.createElement('div');
         toast.classList.add('toast');
         toast.innerHTML = msg;

         toastBox.appendChild(toast);

         if(msg.includes('Please')){
            toast.classList.add('error');
         }

         if(msg.includes('Invalid')){
            toast.classList.add('invalid');
         }

         setTimeout(() => {
            toast.remove();
         }, 6000);
}


