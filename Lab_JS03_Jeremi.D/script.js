function ajouterContenu(message)
{
	
}

function viderContenu()
{
	document.getElementById("resultat").innerHTML = "";
}

function Exercice1()
{
	document.getElementById("resultat").innerHTML += message + "<br/>";
	var cpt, nbr, resultat;
	for(cpt = 0;cpt < 11;cpt++)
	{
		resultat = cpt * nbr;
		alert(nbr + " x " + cpt " = " resultat);
	}
}

function Exercice2()
{
	function entree()
	{
	var nbr1 = prompt("Entrez un chiffre");
	var nbr2 = prompt("Entrez un deuxieme chiffre");
	var opp = prompt("Entrez l'opperateur");
	var continuer = prompt("Voulez vous continuer?");
	var total = 0;
	if (continuer == true)
		{
			entree();
		}
	}
	function validation()
	{
		nbr1 = parseInt(nbr1);
		nbr2 = parseInt(nbr2);
		return nbr1, nbr2;
	}
	
	
	function opperation()
	{
		if (opp == '+')
		{
		total = nbr1 + nbr2;
		}
		else if(opp == '-')
		{
		total = nbr1 - nbr2;
		}
		else if (opp == '*')
		{
			total = nbr1 * nbr2; 
		}
		else 
		{
			total = nbr1 / nbr2;
		}
		return total;
	}
	
}
function Exercice3()
{
	function additionner()
	{
	var nbr = prompt("Entrez un chiffre");
	nbr1 = nbr + 1;
	nbr1 = nbr + 2;
	nbr1 = nbr + 3;
	nbr1 = nbr + 5;
	var array = [nbr1, nbr2, nbr3, nbr4];
	var multiplicateur = array.map(x => x * 2);
	console.log(multiplicateur);
	return multiplicateur;
	}
	
	function validation()
	{
	additionner();
	return multiplicateur <= 47;
	}
}

function Exercice4()
{
	var nbr = prompt("Entrez un nombre");
	var cpt = 0;
	while (cpt <= nbr)
	{
		alert("*" + \n);
	}
}


function Exercice5()

