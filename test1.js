$(document).ready(function () {
    setTimeout(() => {
        if (localStorage.getItem("current_stock_id") === "export") {
            localStorage.getItem("current_stock_id") = "load";
            console.log("exporting");
            document.querySelector("#issuer-profile-export-button > button").click();
            setTimeout(() => {
                console.log("refreshing");
                document.location = document.location;
            }, 20000);
        } else { 
            localStorage.getItem("current_stock_id") = "export"; var currentId = parseInt(localStorage.getItem("current_stock_id")); var nextId = currentId + 1; localStorage.setItem("current_stock_id", nextId.toString()); var stockId = localStorage.getItem("stock_ids").split(",")[nextId]; var selector = "a[value=" + stockId + "]"; console.log("next id - " + nextId.toString()); console.log("Navigating"); $(selector).click(); }
    }, 2000);
}); 