
const input = require("prompt-sync")();
let amount =Number(input ("enter your amount:-"))
let number = Number(input("Enter your 10 digit mobile number:-"));
while (1) {
  if (number.toString().length !== 10) {
    console.log("Please enter a valid 10-digit number!");
    number = Number(input("Enter your 10 digit mobile number:-"));
  } else {
    break;
  }
}
console.log("Valid mobile number entered:", number);
let name = input("enter your name:-");
let Pin = Number(input("enter your four digit pin:-"));
while (1) {
  if (Pin.toString().length !== 4) {
    console.log("Please enter a valid pin number!");
    Pin = Number(input("Enter your four digit pin number:-"));
  } else {
    break;
  }
}
console.log("Valid pin number entered:", Pin);
console.log("\n");
console.log("choese your language");
console.log("\n1.Hindi\n2.English");
let language = input("enter your language type:-");
if (language == 1) {
  console.log("Dhanyawaad aapne ne hindi bhasha ka chayan kiya h ")



  console.log("Isme se koi vikalp chune")
console.log("\n1.Paise Nikale\n2.Rashi deakhe\n3.Jama kare")
let check=Number(input("jo chahte ho vo vikalp chune:-"))
if(check==1){
    console.log("kitna paisa aap nikalna chahte h :-")
    console.log("\n1.500\n2.1000\n3.2000")
    let withdraw=input("vikalp chune:-")  
    if(withdraw==1){
        console.log("Nikashi rashi 500  ")
    } 
    else if(withdraw==2){
        console.log(" Nikashi rashi 1000 ")
    }
    else if(withdraw==3){
        console.log("Nikashi rashi 2000 ")
    }

}
else if(check==2){
    console.log("Kul Dhanrashi:-",amount)
  
}
else if(check==3){
    console.log("kitna paisa aap jma krna chahte h")
    let diposit=Number(input("jama rashi:-"))
    console.log("Kul rashi:-",amount+diposit)
}
} else if (language == 2) {
  console.log("Thanks for choosen english");
}
console.log("please select any one whatever you want")
console.log("\n1.withdraw\n2.balance check\n3.diposit")
let check=Number(input("enter whatever you want:-"))
if(check==1){
    console.log("how much withdraw you want:-")
    console.log("\n1.500\n2.1000\n3.2000")
    let withdraw=input("enter how much withdraw do you want:-")  
    if(withdraw==1){
        console.log("your withdraw 500 confirm ")
    } 
    else if(withdraw==2){
        console.log("your withdraw 1000 confirm ")
    }
    else if(withdraw==3){
        console.log("your withdraw 2000 confirm ")
    }

}
else if(check==2){
    console.log("your total amount is:-",amount)
}
else if(check==3){
    console.log("how much money want to diposit")
    let diposit=Number(input("enter the diposite amount:-"))
    console.log(`your total amount is,${amount+diposit}`)
}