

$("#submit").on("click", function () {
    const input = $("#furniture").val()
    $.get(`/priceCheck/${input}`, function (furnData) {
        $("#money-container").append(`<div>${furnData.price}<div>`)
    })
    $("#furniture").val("")
    
})

$("#submitPurchase").on("click", function () {
    const input = $("#purchase").val()
    $.get(`/buy/${input}`, function (furnData) {
        $("#money-container").append(`<div>${furnData}<div>`)
    })
    $("#purchase").val("")
    
})