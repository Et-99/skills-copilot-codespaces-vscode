function skillsMember( name, age, skills ) {
    this.name = name;
    this.age = age;
    this.skills = skills;
    this.print = function() {
        console.log( this.name + " is " + this.age + " years old and knows " + this.skills );
    }
}