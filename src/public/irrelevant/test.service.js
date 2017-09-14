function testS($log) {
    return {
        add: (a, b) => {
            return a + b;
        },
        multiply: (a, b) => {
            return a * b;
        }
    };
}

export default testS;