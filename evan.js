
        
        
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
facile.hide('#img-planet-Wood');
facile.hide('#img-planet-Water');
facile.hide('#img-planet-Coal');
facile.hide('#img-planet-Iron');
facile.hide('#img-planet-Uranium');
facile.hide('#img-planet-Obsidian');
facile.hide('#img-planet-Diamond');


// CLICS 
facile.onClick('#img-planet-Stone', () => {
    clickCountStone.value += stoneUpgraded ? 2 : 1;
    if (!stoneUpgraded && clickCountStone.value >= 50) facile.show('#upgradestone');
});

facile.onClick('#img-planet-Wood', () => {
    clickCountWood.value += woodUpgraded ? 3 : 1;
    // Vérifie si upgrade disponible : 75 Stone + 75 Wood
    if (!woodUpgraded && clickCountWood.value >= 75 && clickCountStone.value >= 200) facile.show('#upgradewood');
});

facile.onClick('#img-planet-Water', () => {
    clickCountWater.value += waterUpgraded ? 5 : 1;
    // Upgrade Water :  Stone +  Wood
    if (!waterUpgraded && clickCountWater.value >= 100 && clickCountStone.value >= 300 && clickCountWood.value >= 500) facile.show('#upgradewater');
});

facile.onClick('#img-planet-Coal', () => {
    clickCountCoal.value += coalUpgraded ? 8 : 1;
    // Upgrade Coal : 75 Water + 75 Wood
    if (!coalUpgraded && clickCountCoal.value >= 75 && clickCountWater.value >= 800 && clickCountWood.value >= 600) facile.show('#upgradecoal');
});

facile.onClick('#img-planet-Iron', () => {
    clickCountIron.value += ironUpgraded ? 10 : 1;
    // Upgrade Iron : 75 Coal + 75 Water
    if (!ironUpgraded && clickCountIron.value >= 125 && clickCountCoal.value >= 1500 && clickCountWater.value >= 1000) facile.show('#upgradeiron');
});

facile.onClick('#img-planet-Uranium', () => {
    clickCountUranium.value += uraniumUpgraded ? 15 : 1;
    // Upgrade Uranium : 75 Iron + 75 Coal
    if (!uraniumUpgraded && clickCountUranium.value >= 125 && clickCountIron.value >= 1400 && clickCountCoal.value >= 1700) facile.show('#upgradeuranium');
});

facile.onClick('#img-planet-Obsidian', () => {
    clickCountObsidian.value += obsidianUpgraded ? 30 : 1;
    // Upgrade Obsidian : 75 Uranium + 75 Iron
    if (!obsidianUpgraded && clickCountObsidian.value >= 175 && clickCountUranium.value >= 1900 && clickCountIron.value >= 2000) facile.show('#upgradeobsidian');
});

facile.onClick('#img-planet-Diamond', () => {
    clickCountDiamond.value += diamondUpgraded ? 50 : 1;
    // Upgrade Diamond : 75 Obsidian + 75 Uranium
    if (!diamondUpgraded && clickCountDiamond.value >= 200 && clickCountObsidian.value >= 8000 && clickCountUranium.value >= 3000) facile.show('#upgradediamond');
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
    if (!stoneUpgraded && clickCountStone.value >= 50) {
        clickCountStone.value -= 50;
        stoneUpgraded = true;
        facile.show('#img-planet-Wood');
    }
});

facile.onClick('#upgradewood', () => {
    if (!woodUpgraded && clickCountWood.value >= 50 && clickCountStone.value >= 200) {
        clickCountWood.value -= 50;
        clickCountStone.value -= 200;
        woodUpgraded = true;
        facile.show('#img-planet-Water');
    }
});

facile.onClick('#upgradewater', () => {
    if (!waterUpgraded && clickCountWater.value >= 100 && clickCountStone.value >= 500 && clickCountWood.value >= 300) {
        clickCountWater.value -= 100;
        clickCountStone.value -= 300;
        clickCountWood.value -= 500;
        waterUpgraded = true;
        facile.show('#img-planet-Coal');
    }
});

facile.onClick('#upgradecoal', () => {
    if (!coalUpgraded && clickCountCoal.value >= 125 && clickCountWater.value >= 800 && clickCountWood.value >= 600) {
        clickCountCoal.value -= 125;
        clickCountWater.value -= 800;
        clickCountWood.value -= 600;
        coalUpgraded = true;
        facile.show('#img-planet-Iron');
    }
});

facile.onClick('#upgradeiron', () => {
    if (!ironUpgraded && clickCountIron.value >= 125 && clickCountCoal.value >= 1500 && clickCountWater.value >= 1000) {
        clickCountIron.value -= 125;
        clickCountCoal.value -= 1500;
        clickCountWater.value -= 1000;
        ironUpgraded = true;
        facile.show('#img-planet-Uranium');
    }
});

facile.onClick('#upgradeuranium', () => {
    if (!uraniumUpgraded && clickCountUranium.value >= 125 && clickCountIron.value >= 1400 && clickCountCoal.value >= 1700) {
        clickCountUranium.value -= 125;
        clickCountIron.value -= 1400;
        clickCountCoal.value -= 1700;
        uraniumUpgraded = true;
        facile.show('#img-planet-Obsidian');
    }
});

facile.onClick('#upgradeobsidian', () => {
    if (!obsidianUpgraded && clickCountObsidian.value >= 175 && clickCountUranium.value >= 1900 && clickCountIron.value >= 2000) {
        clickCountObsidian.value -= 175;
        clickCountUranium.value -= 1900;
        clickCountIron.value -= 2000;
        obsidianUpgraded = true;
        facile.show('#img-planet-Diamond');
    }
});

facile.onClick('#upgradediamond', () => {
    if (!diamondUpgraded && clickCountDiamond.value >= 200 && clickCountObsidian.value >= 8000 && clickCountUranium.value >= 3000) {
        clickCountDiamond.value -= 200;
        clickCountObsidian.value -= 8000;
        clickCountUranium.value -= 3000;
        diamondUpgraded = true;
        // Dernière planète, rien à débloquer après
    }
});
     //il ne reste plus qua modifier les valeurs a la fin (version finale du jeu)pour debloquer les upgrades

    // fin du jeu 
let gameFinished = false;

// Cette fonction sera appelée automatiquement
function endGame() {
    if (clickCountDiamond.value >= 50000 && !gameFinished) {
        gameFinished = true;

        // Cacher toutes les planètes, upgrades et compteurs
        ['Stone','Wood','Water','Coal','Iron','Uranium','Obsidian','Diamond'].forEach(name => {
            facile.hide('#img-planet-' + name);
            facile.hide('#upgrade' + name.toLowerCase());
            facile.hide('#' + name.toLowerCase() + 'countertext');
        });

        
        const message = document.createElement('div');
        message.id = 'endGameMessage';
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.fontSize = '36px';
        message.style.fontWeight = 'bold';
        message.style.textAlign = 'center';
        message.style.color = 'white';
        message.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        message.style.padding = '40px';
        message.style.borderRadius = '20px';
        message.style.zIndex = '9999';

        message.innerText =
            "WELL DONE, YOU CONQUERED SPACE\n\n" +
            "NOW SPACE IS PROTECTED BY YOU\n\n" +
            "GOOD LUCK!";

        document.body.appendChild(message);
    }
}


clickCountDiamond.onChange(() => {
    endGame();
});
