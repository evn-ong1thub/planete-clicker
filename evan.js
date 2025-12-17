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

