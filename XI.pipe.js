class XI_PIPE {

    forward(xi){
        return {
            next: "CORE",
            signature: xi.scan.hash,
            vector: xi.vector,
            matrix: xi.matrix
        };
    }
}

window.XI_PIPE = new XI_PIPE();
