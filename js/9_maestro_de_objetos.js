const pokemon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

// 1. Filtrar una serie de objetos Pokemon donde el id es divisible por 3
const pokemonDivisiblePor3 = pokemon.filter(p => p.id % 3 === 0);
//console.log(pokemonDivisiblePor3);
// 2. Filtrar pokemones de tipo "fuego"
const pokemonFuego = pokemon.filter(p => p.types.includes("fire"));
//console.log(pokemonFuego);
// 3. Pokemones con mas de un tipo
const pokemonMasDeUnTipo = pokemon.filter(p => p.types.length > 1);
//console.log(pokemonMasDeUnTipo);
// 4. Solo los nombres de los pokemones
const nombresPokemon = pokemon.map(p => p.name);
//console.log(nombresPokemon);
// 5. Pokemones con id mayor a 99
const pokemonIdMayor99 = pokemon.filter(p => p.id > 99).map(p => p.name);
//console.log(pokemonIdMayor99);
// 6. Pokemones cuyo unico tipo es veneno
const pokemonSoloVeneno = pokemon.filter(p => p.types.length === 1 && p.types.includes("poison")).map(p => p.name);
//console.log(pokemonSoloVeneno);
// 7. Una matriz que contiene solo el primer tipo de todos los Pokémon cuyo segundo tipo es "volador"
const pokemonPrimerTipoVolador = pokemon.filter(p => p.types[1] === "flying").map(p => p.types[0]);
//console.log(pokemonPrimerTipoVolador);
// 8. Contar cantidad de pokemones que son de tipo "normal"
const cantPokemonNormal = pokemon.filter(p => p.types.includes("normal")).length;
// console.log(cantPokemonNormal);