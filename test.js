



var myCar2 = {
    maxSpeed: 70, 
    driver: "Martyna",
    drive: function(speed, time){

        console.log(speed * time);
    },

    test: function(){

        console.log(this);

        
    },
    logDriver: function(){

        console.log("driver name is " + this.driver);
    }
};
var myCar3 = {
    maxSpeed: 80, 
    driver: "Jagoda",
    drive: function(speed, time){

        console.log(speed * time);
    },

    test: function(){

        console.log(this);
    }
};

myCar2.logDriver();
myCar2.test();
myCar3.test();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);