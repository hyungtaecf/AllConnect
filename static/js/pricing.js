var monthly = true; // true if monthly payment false if annual payment
$(document).ready(() => {
    $('#switch_container').on('click', () => {
        monthly = !monthly;
        if (monthly) {
            $('#switch_container').find(".switch_circle").animate({ "left": "2.65vmax" }, "medium")
        } else $('#switch_container').find(".switch_circle").animate({ "left": ".25vmax" }, "medium")
    })
})
