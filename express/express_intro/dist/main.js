const fetchBookData = function () {
    let input = $("#book-input").val()

    $.get(`books/${input}`)
}