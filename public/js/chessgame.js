const socket = io();
socket.emit("churan")
socket.on("churan papdi" ,()=>{
    console.log("churan papdi received")
})