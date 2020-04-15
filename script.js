var Person = function(name, yearOfBirth, job){
	this.name=name;
	this.yearOfBirth=yearOfBirth;
	this.job=job;
}
Person.prototype.cal=function(){
		console.log(2020-this.yearOfBirth);
	};
Person.prototype.lastName='Smith';
var kashish=new Person('Kashish',2001,'College')
var nikhil = new Person('Nikhil',2003,'School');
var rajat=new Person('Rajat',1996,'Doctor')
console.log(kashish);
kashish.cal();
//console.log(nikhil);
//console.log(rajat);
nikhil.cal();
rajat.cal();
console.log(kashish.lastName);
console.log(nikhil.lastName);
console.log(rajat.lastName);