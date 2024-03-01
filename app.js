class Resume {
    constructor(name, age, telephone, email) {
        this.name = name;
        this.age = age;
        this.telephone = telephone;
        this.email = email;
        this.education = [];
        this.workExperience = [];
        this.abilities = [];
    }

    addEducation(highSchollName, degree, startYear, endYear) {
        this.education.push({ highSchollName, degree, startYear, endYear })
    }
    addWorkExperience(companyName, position, startYear, endYear) {
        this.workExperience.push({ companyName, position, startYear, endYear })
    }
    addAbility(ability1, ability2) {
        this.abilities.push({ ability1, ability2 })
    }

    resumeAdd() {
        console.log(`Name: ${this.name} Age: ${this.age}  Telephone: ${this.telephone}  Email: ${this.email} `)
        console.log("Education:");
        this.education.forEach(e => { console.log(`${e.highSchollName}, ${e.degree}, ${e.startYear}, ${e.endYear}`) });
        console.log("Work Experience:");
        this.workExperience.forEach(i => { console.log(`${i.companyName}, ${i.position}, ${i.startYear}, ${i.endYear}`) })
        console.log("Abilities:")
        this.abilities.forEach(b => { console.log(`${b}`) })
    }

}


let myResume = new Resume("Mehri", 35, "0123333333", "mehri@gmail.com");
myResume.addEducation("Baku State University", "Master", "2010", "2016")
myResume.addWorkExperience("Company Name", "Position", "2020", "2024")
myResume.addAbility("")

myResume.resumeAdd();

