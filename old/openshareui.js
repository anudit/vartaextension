var openConvoHtml = `
<style>
.convo-launcher {
    position: fixed;
    z-index: 2147483003;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #3047EC;
    cursor: pointer;
    box-shadow: 0 1px 6px 0 rgb(0 0 0 / 6%), 0 2px 32px 0 rgb(0 0 0 / 16%);
    justify-content: center;
    align-items: center;
    display: flex;
}
</style>
<div class="convo-launcher">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1000 1000" height="40px" width="40px">
        <path fill="#010101" d="M461 500l234 226a326 326 0 11-8-461L461 500z"/>
        <circle fill="#010101" cx="762.4" cy="500" r="137.2"/>
    </svg>
<div>
`

document.body.innerHTML+=openConvoHtml;
document.getElementsByClassName('convo-launcher')[0].onclick= ()=>{
    let ele = document.getElementById('convo-frame');
    if(ele === null){

        var iframe = document.createElement("iframe");
        iframe.setAttribute("src", `https://theconvo.space/embed/dt?url=${encodeURIComponent(document.location.origin + document.location.pathname)}&height=400&theme=dark`);
        iframe.setAttribute("style", "border:none; overflow:hidden; position:fixed;bottom: 100px;right: 20px; display:flex;background: black;");
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("id", "convo-frame");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("height", "500px");
        iframe.setAttribute("width", "500px");
        iframe.setAttribute("allowtransparency", "true");
        document.body.appendChild(iframe);
        console.log("opened new iframe")
    }
    else if(ele.style.display == 'none'){
        ele.style.display = 'flex'
    }
    else (
        ele.style.display = 'none'
    )
}

