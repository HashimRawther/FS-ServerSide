var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for Rectangle with l = "+l+" and b = "+b);

    rect(l,b,(err, rectangle) => {
        if(err) {
            console.log("ERROR : "+err.message);
        }
        else {
            console.log("Area : "+rectangle.area());
            console.log("Perometer : "+rectangle.perimeter());
        }
    });

    console.log("This statement is after the call to rect");
}

solveRect(2,8);
solveRect(0,7);
solveRect(6,9);