
        
        
// CODE JS DE PLANET CLICKER

// INIT STATES 
var clickCountStone = facile.state(0);
var clickCountWood = facile.state(0);
var clickCountWater = facile.state(0);
var clickCountCoal = facile.state(0);
var clickCountIron = facile.state(0);
var clickCountUranium = facile.state(0);
var clickCountObsidian = facile.state(0);
var clickCountDiamond = facile.state(0);

// UPGRADE VAR
let stoneUpgraded = false;
let woodUpgraded = false;
let waterUpgraded = false;
let coalUpgraded = false;
let ironUpgraded = false;
let uraniumUpgraded = false;
let obsidianUpgraded = false;
let diamondUpgraded = false;

// HIDE PLANETES
facile.hide('#Planet-Wood');
facile.hide('#Planet-Water');
facile.hide('#Planet-Coal');
facile.hide('#Planet-Iron');
facile.hide('#Planet-Uranium');
facile.hide('#Planet-Obsidian');
facile.hide('#Planet-Diamond');

facile.hide('#upgradestone');
facile.hide('#upgradewood');
facile.hide('#upgradewater');
facile.hide('#upgradecoal');
facile.hide('#upgradeiron');
facile.hide('#upgradeuranium');
facile.hide('#upgradeobsidian');
facile.hide('#upgradediamond');

// CLICS 
facile.onClick('#img-planet-Stone', () => {
    clickCountStone.value += stoneUpgraded ? 2 : 1;
    if (!stoneUpgraded && clickCountStone.value >= 75) facile.show('#upgradestone');
});

facile.onClick('#img-planet-Wood', () => {
    clickCountWood.value += woodUpgraded ? 2 : 1;
    // Vérifie si upgrade disponible : 75 Stone + 75 Wood
    if (!woodUpgraded && clickCountWood.value >= 75 && clickCountStone.value >= 75) facile.show('#upgradewood');
});

facile.onClick('#img-planet-Water', () => {
    clickCountWater.value += waterUpgraded ? 2 : 1;
    // Upgrade Water : 75 Stone + 75 Wood
    if (!waterUpgraded && clickCountWater.value >= 75 && clickCountStone.value >= 75 && clickCountWood.value >= 75) facile.show('#upgradewater');
});

facile.onClick('#img-planet-Coal', () => {
    clickCountCoal.value += coalUpgraded ? 2 : 1;
    // Upgrade Coal : 75 Water + 75 Wood
    if (!coalUpgraded && clickCountCoal.value >= 75 && clickCountWater.value >= 75 && clickCountWood.value >= 75) facile.show('#upgradecoal');
});

facile.onClick('#img-planet-Iron', () => {
    clickCountIron.value += ironUpgraded ? 2 : 1;
    // Upgrade Iron : 75 Coal + 75 Water
    if (!ironUpgraded && clickCountIron.value >= 75 && clickCountCoal.value >= 75 && clickCountWater.value >= 75) facile.show('#upgradeiron');
});

facile.onClick('#img-planet-Uranium', () => {
    clickCountUranium.value += uraniumUpgraded ? 2 : 1;
    // Upgrade Uranium : 75 Iron + 75 Coal
    if (!uraniumUpgraded && clickCountUranium.value >= 75 && clickCountIron.value >= 75 && clickCountCoal.value >= 75) facile.show('#upgradeuranium');
});

facile.onClick('#img-planet-Obsidian', () => {
    clickCountObsidian.value += obsidianUpgraded ? 2 : 1;
    // Upgrade Obsidian : 75 Uranium + 75 Iron
    if (!obsidianUpgraded && clickCountObsidian.value >= 75 && clickCountUranium.value >= 75 && clickCountIron.value >= 75) facile.show('#upgradeobsidian');
});

facile.onClick('#img-planet-Diamond', () => {
    clickCountDiamond.value += diamondUpgraded ? 2 : 1;
    // Upgrade Diamond : 75 Obsidian + 75 Uranium
    if (!diamondUpgraded && clickCountDiamond.value >= 75 && clickCountObsidian.value >= 75 && clickCountUranium.value >= 75) facile.show('#upgradediamond');
});

//  AFFICHAGE 
clickCountStone.onChange(n => facile.write('#countStone', n));
clickCountWood.onChange(n => facile.write('#countWood', n));
clickCountWater.onChange(n => facile.write('#countWater', n));
clickCountCoal.onChange(n => facile.write('#countCoal', n));
clickCountIron.onChange(n => facile.write('#countIron', n));
clickCountUranium.onChange(n => facile.write('#countUranium', n));
clickCountObsidian.onChange(n => facile.write('#countObsidian', n));
clickCountDiamond.onChange(n => facile.write('#countDiamond', n));

// ACHAT UPGRADES ET DÉBLOCAGE PLANÈTE SUIVANTE
facile.onClick('#upgradestone', () => {
    if (!stoneUpgraded && clickCountStone.value >= 75) {
        clickCountStone.value -= 75;
        stoneUpgraded = true;
        facile.show('#Planet-Wood');
    }
});

facile.onClick('#upgradewood', () => {
    if (!woodUpgraded && clickCountWood.value >= 75 && clickCountStone.value >= 75) {
        clickCountWood.value -= 75;
        clickCountStone.value -= 75;
        woodUpgraded = true;
        facile.show('#Planet-Water');
    }
});

facile.onClick('#upgradewater', () => {
    if (!waterUpgraded && clickCountWater.value >= 75 && clickCountStone.value >= 75 && clickCountWood.value >= 75) {
        clickCountWater.value -= 75;
        clickCountStone.value -= 75;
        clickCountWood.value -= 75;
        waterUpgraded = true;
        facile.show('#Planet-Coal');
    }
});

facile.onClick('#upgradecoal', () => {
    if (!coalUpgraded && clickCountCoal.value >= 75 && clickCountWater.value >= 75 && clickCountWood.value >= 75) {
        clickCountCoal.value -= 75;
        clickCountWater.value -= 75;
        clickCountWood.value -= 75;
        coalUpgraded = true;
        facile.show('#Planet-Iron');
    }
});

facile.onClick('#upgradeiron', () => {
    if (!ironUpgraded && clickCountIron.value >= 75 && clickCountCoal.value >= 75 && clickCountWater.value >= 75) {
        clickCountIron.value -= 75;
        clickCountCoal.value -= 75;
        clickCountWater.value -= 75;
        ironUpgraded = true;
        facile.show('#Planet-Uranium');
    }
});

facile.onClick('#upgradeuranium', () => {
    if (!uraniumUpgraded && clickCountUranium.value >= 75 && clickCountIron.value >= 75 && clickCountCoal.value >= 75) {
        clickCountUranium.value -= 75;
        clickCountIron.value -= 75;
        clickCountCoal.value -= 75;
        uraniumUpgraded = true;
        facile.show('#Planet-Obsidian');
    }
});

facile.onClick('#upgradeobsidian', () => {
    if (!obsidianUpgraded && clickCountObsidian.value >= 75 && clickCountUranium.value >= 75 && clickCountIron.value >= 75) {
        clickCountObsidian.value -= 75;
        clickCountUranium.value -= 75;
        clickCountIron.value -= 75;
        obsidianUpgraded = true;
        facile.show('#Planet-Diamond');
    }
});

facile.onClick('#upgradediamond', () => {
    if (!diamondUpgraded && clickCountDiamond.value >= 75 && clickCountObsidian.value >= 75 && clickCountUranium.value >= 75) {
        clickCountDiamond.value -= 75;
        clickCountObsidian.value -= 75;
        clickCountUranium.value -= 75;
        diamondUpgraded = true;
        // Dernière planète, rien à débloquer après
    }
});
     //il ne reste plus qua modifier les valeurs a la fin (version finale du jeu)pour debloquer les upgrades

     //  FIN DU JEU
function checkWin() {
    if (clickCountDiamond.value >= 1000) {
        // Cacher toutes les planètes et upgrades
        ['Stone','Wood','Water','Coal','Iron','Uranium','Obsidian','Diamond'].forEach(name => {
            facile.hide('#Planet-' + name);
            facile.hide('#upgrade' + name.toLowerCase());
            facile.write('#count' + name, ''); // Optionnel : vide les compteurs
        });

        // Créer un message en plein écran
        const message = document.createElement('div');
        message.id = 'winMessage';
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.fontSize = '36px';
        message.style.fontWeight = 'bold';
        message.style.textAlign = 'center';
        message.style.color = 'white';
        message.style.backgroundColor = 'rgba(0,0,0,0.8)';
        message.style.padding = '50px';
        message.style.borderRadius = '20px';
        message.innerText = "WELL DONE, YOU CONQUERED SPACE,\nNOW IT IS PROTECTED BY YOU, GOOD LUCK!";
        document.body.appendChild(message);
    }
}

//  valeur du clic diamant pour finir le jeu 
facile.onClick('#Planet-Diamond', () => {
    clickCountDiamond.value += diamondUpgraded ? 2 : 1;
    // Vérifie si upgrade Diamond est disponible
    if (!diamondUpgraded && clickCountDiamond.value >= 75 && clickCountObsidian.value >= 75 && clickCountUranium.value >= 75) {
        facile.show('#upgradediamond');
    }
    // Vérifie la condition de victoire
    checkWin();
});
 
facile.onClick('#upgradediamond', () => {
    if (!diamondUpgraded && clickCountDiamond.value >= 75 && clickCountObsidian.value >= 75 && clickCountUranium.value >= 75) {
        clickCountDiamond.value -= 75;
        clickCountObsidian.value -= 75;
        clickCountUranium.value -= 75;
        diamondUpgraded = true;
        
    }
    // Vérifie la condition de victoire après l'achat
    checkWin();
});
   //style du message de fin changable puisque le mien est laid malgré mes efforts :( 