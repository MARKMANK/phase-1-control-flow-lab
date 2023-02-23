
function scuberGreetingForFeet(feetTraveled){
  if (feetTraveled <= 400)
    return 'This one is on me!';
  if (feetTraveled >= 400 && feetTraveled <= 2000)
    return 'That will be twenty bucks.';
  else if(feetTraveled > 2500)
    return 'No can do.'
  else (feetTraveled > 2000)
    return 'I will gladly take your thirty bucks.'
}

function ternaryCheckCity(whatCity){
  return whatCity == 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tipAmount){
  switch (tipAmount){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    default:
      return 'Bye.';
      break;
  }
}