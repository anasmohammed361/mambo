let {Client}=require("whatsapp-web.js")
let qrcode=require("qrcode-terminal")
const client =new Client()
let {generate}=qrcode
client.on("qr",(qr)=>{
    generate(qr)
})
client.on("ready",()=>{
    console.log("Ready");
})
client.on("message_create",(msg)=>{
    console.log(msg);
})


client.initialize()