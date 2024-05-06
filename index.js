function time()
{   let time=new Date()
    let hour=time.getHours().toString().padStart(2,0);
    let mornev=time>=12?"PM":"AM";
    hour=hour%12;
    let minute=time.getMinutes().toString().padStart(2,0);
    let seconds=time.getSeconds().toString().padStart(2,0);
    let timenow=`${hour}:${minute}:${seconds} ${mornev}`;
    document.getElementById("smallbox").textContent=timenow;
}
time();
setInterval(time,1000);