



var myCar = {
    maxSpeed: 70, 
    driver: "Martyna",
    drive: function(speed, time){

        console.log(speed * time);
    },


    logDriver: function(){

        console.log("driver name is " + this.driver);
    }
};

var myArray = new Array();
var myString = new String();


var Car = function(maxSpeed, driver){

this.maxSpeed = maxSpeed;
this.driver = driver;
this.drive = function(speed, time){

    console.log(speed * time);
};
this.logDriver = function(){

    console.log("driver name is " + this.driver);
};

} //;? czemu nie ma?

var myCar = new Car(70, "Martyna");
var myCar2 = new Car(90, "Jagoda");
var myCar3 = new Car(40, "Karolina");
var myCar4 = new Car(20, "Asia");

myCar.drive(20, 4);
myCar3.logDriver();