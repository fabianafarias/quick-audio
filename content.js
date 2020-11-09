const interval = setInterval(()=>{
    const header = document.querySelector("yt-live-chat-header-renderer")
    if(header){
        console.log(header)
        clearInterval(interval)      

        const button = document.createElement("button")
        button.innerHTML = "Show Super Chat"
        button.classList.add("showSuperChat")
    
        button.addEventListener("click",()=>{
        const superChat = document.querySelector("yt-live-chat-paid-message-renderer");
        superChats.forEach((superChat)=>{
        console.log(superChat)
        
            })
        })

        header.appendChild(button)

    } 
},1000)

