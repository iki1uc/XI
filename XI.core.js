class XI {

    constructor(){
        this.input = null;
        this.scan = null;
        this.kernel = null;
        this.vector = null;
        this.matrix = null;
        this.output = null;
    }

    enter(value){
        this.input = value;
    }

    compute(){
        this.output = {
            input: this.input,
            scan: this.scan,
            kernel: this.kernel,
            vector: this.vector,
            matrix: this.matrix
        };
        return this.output;
    }
}

window.XI = new XI();
