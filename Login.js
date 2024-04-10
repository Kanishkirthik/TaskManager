document.querySelector('form').addEventListener('submit',(e)=>{
e.preventDefault()
let username=document.getElementById('email')
let Password=document.getElementById('Password')
console.log(Password.value)

let founded=check(username.value,Password.value)
if (founded){
    window.location.href="index.html"
}else{
    alert("invalid user")
}

})
let check= async (user,password)=>{
    try {
        let  response = await fetch('./data.json');
        let data = await response.json();
        let d=data.users;
        return await new Promise((res,reject)=>{
            let found = d.find(e=>e.username===user);
            if(found){
                res(found)
            }else{
                reject(found)
            }

        })
       
       
      } catch (error) {
        console.error('Error:', error);
      }
    }