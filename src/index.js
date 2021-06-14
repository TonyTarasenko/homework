const presenceQuantity = 25;
const minusOne = -1;
const goodMark = 90;
const goodRatio = 0.9;

function Student(firstName, secondName, birthDate, marks){
    this.firstName = firstName;
    this.secondName = secondName;
    this.birthDate = birthDate;
    this.marks = marks;
    this.presence = new Array(presenceQuantity);
}

Student.prototype.firstEmpty = function (presence) {
    return presence.findIndex(e => e === undefined);
};

Student.prototype.present = function() {
    const firstEmpty = this.firstEmpty(this.presence);

    if(firstEmpty !== minusOne) {
        this.presence[firstEmpty] = true;
    }
};

Student.prototype.absent = function() {
    const firstEmpty = this.firstEmpty(this.presence);

    if(firstEmpty !== minusOne) {
        this.presence[firstEmpty] = false;
    }
};

Student.prototype.average = function() {
    const sum = this.marks.reduce((accum, current) => accum += current);
    return sum / this.marks.length;
};

Student.prototype.age = function() {
    return new Date().getFullYear() - this.birthDate;
};

Student.prototype.summary = function () {
    const average = this.average();

    const visitedLessons = this.presence.filter(el => el === true);
    const passedLesson = this.presence.filter(el => el !== undefined);

    const ratio = visitedLessons.length / passedLesson.length;

    if(average > goodMark && ratio > goodRatio) {
        return 'Ути какой молодчинка!';
    } else if (average > goodMark || ratio > goodRatio) {
        return 'Норм, но можно лучше';
    } else return 'Редиска!';
};

const ivan = new Student('Ivan', 'Petrov', 1995, [100, 100, 70, 100, 100, 100, 100]);
const vasya = new Student('Vasiliy', 'Pupkin', 1994, [100, 100, 100, 100]);

ivan.present();
ivan.present();
ivan.present();
ivan.present();
ivan.absent();
ivan.absent();
ivan.average();
ivan.age();
ivan.summary();

vasya.present();
vasya.present();
vasya.present();
vasya.present();
vasya.absent();
vasya.present();
vasya.present();
vasya.average();
vasya.age();
vasya.summary();

