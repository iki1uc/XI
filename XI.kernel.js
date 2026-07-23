class XI_KERNEL {

    process(hash){
        return {
            core: (hash * 3) % 999999,
            mode: "XI-KERNEL"
        };
    }
}

window.XI_KERNEL = new XI_KERNEL();
