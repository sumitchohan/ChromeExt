localStorage.setItem("content_script_chrome_ext",`$(document).ready(function () {
    setTimeout(() => {
        
        var currentId = parseInt(localStorage.getItem("current_stock_id"));
        var nextId = currentId + 1;
        localStorage.setItem("current_stock_id", nextId.toString());
        var stockId = localStorage.getItem("stock_ids").split(",")[nextId];
        var selector = "a[value='" + stockId + "']";  
        console.log("exporting");
        document.querySelector("#issuer-profile-export-button > button").click();

        if (localStorage.getItem("current_mode") === "export") {
            localStorage.setItem("current_mode", "load");
            setTimeout(() => { console.log("refreshing");document.location = document.location; }
                , 60000);
        }
        else {
            localStorage.setItem("current_mode", "export");
        }

    }, 1000);
}); `);

//localStorage.setItem("content_script_chrome_ext",`
$(document).ready(function () {
    setTimeout(() => {
        var currentId = parseInt(localStorage.getItem("current_stock_id"));
        var nextId = currentId + 1;
        localStorage.setItem("current_stock_id", nextId.toString());
        var stockId = localStorage.getItem("stock_ids").split(",")[nextId];
        var selector = "a[value='" + stockId + "']";
        console.log("exporting");
        document.querySelector("#issuer-profile-export-button > button").click();
        setTimeout(() => {
            document.querySelector(selector).click();
            setTimeout(() => {
                document.location = document.location;                 
            }, 5000);
        }, 20000);
    }, 1000);
});
//`);


localStorage.setItem("content_script_chrome_ext", ` `);
localStorage.setItem("content_script_chrome_ext",` `);