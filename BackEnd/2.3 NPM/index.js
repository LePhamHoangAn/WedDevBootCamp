import generateName from "sillyname";
import {randomSupervillain} from 'supervillains';
import {randomSuperhero} from 'superheroes';

var sillyname=generateName();
var heroesname=randomSuperhero();
var villainsname=randomSupervillain();

var randomnumbergenerater= Math.floor((Math.random()*2)+1);


console.log(`${heroesname} is having an epic fight with ${villainsname}.`);
if(randomnumbergenerater===1)
{
    console.log(`${heroesname} beated ${villainsname}'s ass.`);
}
else
{
    console.log(`${villainsname} beated ${heroesname}'s ass.`);
}