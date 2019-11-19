
let a = 1, b = 2, c = 3;

(firstFunction = () => {
    let b = 5, c = 6;

    (secondFunction = () => {
        let b = 8;
        console.log("a: " + a + ", b: " + b + ", c: " + c);
        (thirdFunction = () => {
            let a = 7, c = 9;

            (fourthFunction = () => {
                let a = 1, c = 8;

            })();
        })();
    })();
})();
