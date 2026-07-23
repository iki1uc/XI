class XI_MATRIX {

    build(core){
        return {
            row: core % 9,
            col: (core * 4) % 9
        };
    }
}

window.XI_MATRIX = new XI_MATRIX();
