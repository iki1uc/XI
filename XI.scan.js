class XI_SCAN {

    detect(value){
        return {
            type: typeof value,
            length: (""+value).length,
            hash: (value * 13) % 999999
        };
    }
}

window.XI_SCAN = new XI_SCAN();
