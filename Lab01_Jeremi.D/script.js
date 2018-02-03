function Exercice1()
{
	//Écrivez ici le code pour l'exercice 1
	var choix, marque;
	var chocolat = prompt("Aimez-vous le chocolat?");
	switch (chocolat)
	{
		case "oui":
			marque = prompt("quelle est votre marque favorite?");
			break;
		case "non":
			alert("C'est surprenant -_-...");
		default:
	alert("vous n'avez pas bien répondu, repondez par <oui> ou <non>");
	}
}

function Exercice2()
{
	//Écrivez ici le code pour l'exercice 2
	var age;
	var tableau1 = new Array('Non spécifiée !', 'Vétérans', 'Baby-boomers', 'Génération X', 'Génération Y', 'Génération Z!');
	var age = prompt("En quelle année êtes-vous né(e)");
	if (age < 1930)
	{
		alert("Non spécifiée");		
	}
	else if (age < 1946)
	{
		alert("Vétérans");
	}
	else if (age < 1965)
	{
		alert("Baby-boomers");
	}
	else if (age < 1977)
	{
		alert("Génération X");
	}
	else if (age < 1992)
	{
		alert("Génération Y");
	}
	else 
	{
		alert("Génération Z");
	}
}

function Exercice3()
{
	//Écrivez ici le code pour l'exercice 3
	var tableauFilm = new Array('Inception', 'Doctor Strange', 'Edge of Tomorrow');
	var choix = prompt("Entrez un nombre parmis 1, 2 ou 3");
	switch(choix)
	{
	case 1:
		alert(tableauFilm[choix]);
		break;
	case 2:
		alert(tableauFilm[choix]);
		break;
	case 3: 
		alert(tableauFilm[choix]);
	default:
		alert("Vous n'avez pas entrez un nombre correct");
	
	}
}

function Exercice4()
{
	//Code à corriger de l'exercice 4
	
	var nom = prompt("Quel est votre nom?");
	var majeur = confirm("Êtes-vous majeur(e)?");
	var Age = prompt("Quel est votre âge?");
	
	if(majeur == true && Age > 17)
	{
		alert("Vous dites la vérité!");
	}
	else
	{
		alert("Vous mentez!");
		majeur = false;
	}
	
	var choix = prompt("Que préférez-vous (entrez le chiffre)? \n 1 - Les RPG \n 2 - Les shooters" + 
					"\n 3 - Les RTS \n 4 - Les MOBA");
	choix = parseInt(choix);
	switch(choix)
	{
		case 1: 
			alert(nom + " a " + Age + "ans et préfère les jeux de rôles!");
			break;
		case 2:
			alert(nom + " a " + Age + "ans et préfère les jeux de tirs!");
			break;
		case 3:
			alert(nom + " a " + Age + "ans et préfère les jeux de stratégies!");
			break;
		case 4:
			alert(nom + " a " + Age + "ans et préfère les jeux d'arènes de combat!");
			break;
		default:
			alert(nom + " a " + Age + " ans et ne sait pas entrer un chiffre entre 1 et 4!");
			break;
	}
}


function Exercice5()
{
	//Écrivez ici le code pour l'exercice 5
	var typeM;
	var arme;
	var nom = prompt("Quel est votre nom?");
	var test = confirm("Votre nom est bien Patate?"); 
		if (test == true)
		{
			alert("votre nom est désormait Patate");
			nom = "Patate";
		}			
		else
		{
			alert("Haha, je rigole, vote nom est bien : " + nom);
		}	
	var mission = prompt("Il y a 3 mission de disponible, choisisez parmis 1, 2 ou 3");
	mission = parseInt(mission);
	
	switch(mission)
	{
		case 1:
			typeM = "sauvetage";
			alert("Vous ferez une mission de type : " + typeM);
			break;
		case 2:
			typeM = "capture";
			alert("Vous ferez une mission de type : " + typeM);
			break;
		case 3:
			typeM = "exploration";
			alert("Vous ferez une mission de type : " + typeM);
			break;
		default:
			var confirmation = confirm("Vous voulez faire une mission ?");
			if (confirmation == true)
			{
				alert("alors vous ferez une mission speciale!");
				typeM = "speciale";
			}
			else 
			{
				alert("Alors vous vous pognerez le beigne");
				typeM = "se pogner le beigne";
			}
	}
	var Aki = prompt("Vous pouvez choisir une arme parmis ceux-ci: \n 1 - sling shot \n 2 - lance patate  \n 3 - kitty corner shot \n 4 - helicoptere apache" );
		Aki = parseInt(Aki);
		switch(Aki)
		{
			case 1:
				arme = "sling shot";
				break;
			case 2:
				arme = "lance patate";	
				break;
			case 3:
				arme = "kitty corner shot";	
				break;
			case 4:
				arme = "helicoptere apache";
				break;
			default:
				arme = "sling shot";
					
		}
	alert("Vous, " + nom + " paticipez à une mission de type " + typeM + " et vous aurez droit a un " + arme + " pour vous simplifier la tâche. \n Bon courage!") 
}