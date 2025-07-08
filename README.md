# Méthode de Factorisation Fractionnaire

Ce site permet de trouver un **facteur premier** d’un **nombre impair composé** en utilisant une méthode fractionnaire originale.

## Principe de la méthode

Soit un nombre impair O.

On divise O par des valeurs décimales de la forme :

- **X.25 ou X.75** pour des divisions par **4**
- **X.X25 ou X.X75** pour des divisions par **8**
- **X.XX25 ou X.XX75** pour des divisions par **16**
- etc.

Ensuite, si le quotient est **entier**, on le divise par le même 2^n utilisé dans la méthode (4, 8, 16…) pour retrouver un **facteur premier de O**.

## Exemple

Prenons O = 77

1. On essaye la valeur 1.75 :  
   → 77 ÷ 1.75 = 44 (quotient entier)  
   → 44 ÷ 4 = 11 → ✅ **11 est un facteur premier**

Ou encore :

2. On essaye 2.75 :  
   → 77 ÷ 2.75 = 28  
   → 28 ÷ 4 = 7 → ✅ **7 est un facteur premier**

## Utilisation

1. Tapez un **nombre impair composé** dans le champ.
2. Cliquez sur **Trouver le facteur premier**.
3. Le site teste automatiquement les valeurs fractionnaires de la forme décrite ci-dessus jusqu'à trouver un **facteur premier**.
4. Le facteur trouvé s'affiche.

## Objectif

Ce projet explore une **nouvelle approche heuristique** pour identifier rapidement les facteurs premiers, sans diviseurs classiques. Il s'agit d'une **méthode expérimentale** qui a fonctionné sur tous les cas testés jusqu’à 10^15.

## Auteur

Méthode développée par **Bahbouhi Bouchaib**, chercheur indépendant en mathématiques à Nantes (France).

---

© 2025 – Tous droits réservés.
