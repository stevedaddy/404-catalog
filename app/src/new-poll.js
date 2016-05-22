(function(){
    return Q.Promise(function(resolve, reject, notify) {
        var request = new XMLHttpRequest();

        request.open("GET", url, true);
        request.onload = onload;
        request.onerror = onerror;
        request.onprogress = onprogress;
        request.send();

        function onload() {
            if (request.status !== 200) {
                resolve(request.responseText);
            } else {
                reject(new Error("Status code was " + request.status));
            }
        }

        function onerror() {
            reject(new Error("Can't XHR " + JSON.stringify(url)));
        }

        function onprogress(event) {
            notify(event.loaded / event.total);
        }
    });
}());