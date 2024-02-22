function loadScript(src,callback){
    var script = document.createElement("script")
    script.src = src;
    script.onload = function(){
        console.log("loaded script with src" + src)
        callback(null,src)
    }
    script.onerror = function(){
        console.log("error  in loading with src" + src)
        callback(new Error("src is got some error"))
    }
    document.body.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", goodmorning)
    if(error){
        console.log(error)
        return
    }
    alert("hello world" + src)

    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", goodmorning)

    if(error){
        console.log(error)
        return
    }
    alert("good morning" +src)

    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", goodmorning)

    if(error){
        console.log(error)
        return
    }
    alert("good morning" +src)

    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", goodmorning)

    if(error){
        console.log(error)
        return
    }
    alert("good morning" +src)



