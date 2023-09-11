//  var gio; // gare funqcia romlis shecvlac shegvidzlia
//  let gio; // shignita funqcia aseve shesadzlebelia amis shecvlac
//  const gio; // mudmivi mxolod erti. ori javascript file ro gvqondes iqac imushavebs. shesadzlebelia shecvla mainc..

/* var randomNumber = Math.floor(Math.random() * 101);  // Math.floor - amrgvalebs ricxvs 

 if (randomNumber > 90) {
    alert (`This number is good! ${randomNumber}`);
 }
   else {
    alert (`This is not my type! ${randomNumber}`);
 } 
 */


/* function numberafterclick() {
    let randomNumber = Math.floor(Math.random() * 101);
    alert(randomNumber);
} 
*/

function nameafterclick() {
    const userName = (document.getElementById("userName").value);
    if (userName) {
        alert(`gaumarjos ${userName}`);
    }
}


function numberafterclick() {

  const userName = (document.getElementById("userName").value);
  const userAge = Number(document.getElementById("userAge").value);

  if (userName, userAge > 100) {
    alert(`პაპს ნუ ატყუებ ${userName}!`);
  } else if (userAge > 17) {
    alert(`${userName} დაშვებული ხარ კლუბში.`);
  } else {
    alert(`${userName} არ ხარ დაშვებული კლუბში.`);
  }
}