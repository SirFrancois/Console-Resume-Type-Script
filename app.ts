let myName: string = "Sir"

console.log("name:" + myName.toUpperCase());
console.log("Career: Literally always in this class/Student");
console.log("Description: I have a turtle");

const myInterestArray: string[] = ["* Video Games", "*Watching movies", "*Walking my dog", "*Making music"];
console.log("My interest: ");
for (let i = 0; i < myInterestArray.length; i++) {
    console.log("*" + myInterestArray[i]);
}
console.log(" ");

const prevExperienceArray = [
    {
        companyName: "Innovate Bham",
        jobTitle: "Stuff Doer"
    }


]

console.log("My Previous Experience:");
displayPosition("Innovate Bham", "stuff doer", "When theres stuff that needs to be done...I do it")

function displayPosition(company, title, desc) {
    console.log(`my title was ${title}, I workjed at ${company}, and I ${desc}`);
}
