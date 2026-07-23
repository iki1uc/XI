class XI_VECTOR {

    build(core){
        return {
            x: core % 81,
            y: (core * 2) % 81
        };
    }
}

window.XI_VECTOR = new XI_VECTOR();
