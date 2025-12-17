//ameliorations de la boutique
        facile.write('#amelioration-1', 'Améliorer planète 1');
        
        


var clickCount = 0;
 //on cache les compteurs et les boutons 
    facile.hide('#Planet-Wood')     
  facile.hide('#Planet-Water')
   facile.hide('#Planet-Coal')
     facile.hide('#Planet-Iron')
      facile.hide('#Planet-Uranium')
       facile.hide('#Planet-Obsidian')
        facile.hide('#Planet-Diamond')
        facile.hide('#upgradestone')
        facile.hide('#upgradewood')
        facile.hide('#upgradewater')
        facile.hide('#upgradecoal')
        facile.hide('#upgradeiron')
        facile.hide('#upgradeuranium')
        facile.hide('#upgradeobsidian')
        facile.hide('#upgradediamond')
    //on fait apparaitre des boutons au fur et a esure des resssources
     clickCountStone.onChange((newCount) => { 
           if (newCount == 10 ) {
              facile.show('#Planet-Wood')
            }
        });
        
           clickCountWood.onChange((newCount) => {
            if (newCount == 10 ) {
                facile.show('#Planet-Water')
            }
        });
     
        clickCountWater.onChange((newCount)=> {
            if (newCount == 10 ) {
                facile.show('#Planet-Coal')
            }
        });

        clickCountCoal.onChange((newCount)=> {
            if (newCount == 10 ) {
                facile.show('#Planet-Iron')
            }
        });
          
        clickCountIron.onChange((newCount)=> {
            if (newCount == 10 ) {
                facile.show('#Planet-Uranium')
            }
        });

        clickCountUranium.onChange((newCount)=> {
            if (newCount == 10 ) {
                facile.show('#Planet-Obsidian')
            }
        });

        clickCountObsidian.onChange((newCount)=> {
            if (newCount == 10 ) {
                facile.show('#Planet-Diamond')
            }
        });
        
        clickCountStone.onChange((newCount)=> {
            if (newCount == 20 ) {
                facile.show('#upgradestone')
            }
        });

        clickCountWood.onChange((newCount)=> {
        if (newCount >= 20 && clickCountStone.value >= 50) {
            facile.show('#upgradewood')
        }
       });

       clickCountWater.onChange((newCount)=> {
        if (newCount >= 20 && clickCountWood.value >= 50) {
            facile.show('#upgradewater')
        }
       })

       clickCountCoal.onChange ((newCount)=> {
        if (newCount >= 20 && clickCountWater.value >= 50) {
            facile.show('#upgradecoal')
        }
       })
       
       clickCountIron.onChange ((newCount)=> {
        if (newCount >= 20 && clickCountCoal.value >= 50) {
            facile.show('#upgradeiron')
        }
       })

       clickCountUranium.onChange ((newCount)=> {
        if (newCount >= 20 && clickCountIron.value >= 50) {
            facile.show('#upgradeuranium')
        }
       })

       clickCountObsidian.onChange ((newCount)=> {
        if (newCount >= 20 && clickCountUranium.value >= 50) {
            facile.show('#upgradeobsidian')
        }
       })

       clickCountDiamond.onChange ((newCount)=> {
        if (newCount >= 20 && clickCountObsidian.value >= 50) {
            facile.show('#upgradediamond')
        }
       })

      
  
 facile.onClick('#upgradestone', () => {
    if (clickCountStone.value >= 75 ) { 
 clickCountStone.value = clickCountStone.value - 75}
})
clickCountStone.onChange((newCount) => {
    facile.write('#countStone', newCount);
});
