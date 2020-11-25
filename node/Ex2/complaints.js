const consts = require(`./consts`)
const handler =  require(`./complaintsHandler`)


let complaint1 = {
    text: "I'm not getting enough money",
    type: consts.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: consts.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: consts.EMOTIONS
}

handler.handleComplaints(complaint1)
handler.handleComplaints(complaint2)
handler.handleComplaints(complaint3)