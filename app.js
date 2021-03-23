//Super Class
class School {
  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
    this._totalNumberOfSchools++
  }

  get name() {
    return this._name ;
  }

  get level() {
    return this._level ;
  }

  get numberOfStudents() {
    return this._numberOfStudents ;
  }

  set numberOfStudents(num) {
    if(isNan(num)){
       console.log('Invalid input: numberOfStudents must be set to a Number')
    } else {
      this._numberOfStudents = num;
    } 
  };

  set level(lvl) {
    if (lvl === 'primary' || lvl === 'middle' || lvl === 'high'){
    this._level = lvl;
    } else {
      console.log('Invalid input: level must be set to primary, middle, or high')
    }
  };

  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} at the ${this.level} school level.`)
  };

  static pickSubstituteTeacher(substituteTeacher) {
    const ranNum = Math.floor(Math.random() * substituteTeacher.length);
    return substituteTeacher[ranNum];
  }
}

//child class PrimarySchool with inheritance
class PrimarySchool extends School {
  constructor(name, pickupPolicy, numberOfStudents){
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }

  set pickupPolicy(policy) {
    this._pickupPolicy = policy;
  }
}

//child class MiddleSchool with inheritance
class MiddleSchool extends School {
  constructor(name, numberOfStudents){
    super(name, 'middle', numberOfStudents);
  }
}

//child class HighSchool with inheritance
class HighSchool extends School {
  constructor(name, sportsTeam, numberOfStudents){
    super(name, 'high', numberOfStudents);
    this._sportsTeam = sportsTeam;
  }

   get sportsTeam() {
    console.log(this._sportsTeam);
  }

  set sportsTeams(team) {
    this._sportsTeams.push(team);
  }
}

//Test PrimarySchool class/constructor with inheritance.
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'Students must be picked up by a parent, guardian, or a family member over the age of 13.', 514);
lorraineHansbury.quickFacts(); // reads Lorraine Hansbury educated 514 at the primary school level

//Test pickSubstituteTeacher static method
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

//Test HighSchool class/constructor with inheritance
const alSmith = new HighSchool('Al E. Smith', ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 415);
alSmith.sportsTeam; // reads [array, of, sports, teams, listed, on, line 97]

//Return to complete the following:
/*
- Create a middle school class
- Add more properties to each class (averageTestScores, schoolOverview, etc.)
- Create a class called SchoolCatalog that holds a collection of schools. Create an instance of SchoolCatalog for primary, middle, and high schools.
*/