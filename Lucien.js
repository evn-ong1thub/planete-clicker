

        var clickCountStone = 0;

        facile.onClick('#Planet-Stone',() => {
            clickCountStone = clickCountStone + 1
            facile.write('#countStone', clickCountStone)
        })
        
        var clickCountWood  = 0;
facile.hide('#Planet-Wood')
        facile.onClick('#Planet-Wood',() => {
            clickCountWood = clickCountWood + 1
            facile.write('#countWood', clickCountwood)
        })

        var clickCountWater = 0
facile.hide('#Planet-Water')
        facile.onClick('#Planet-Water',() => {
            clickCountWater = clickCountWater + 1
            facile.write('#countWater', clickCountWater)
        })

        var clickCountCoal = 0
facile.hide('#Planet-Coal')
        facile.onClick('#Planet-Coal',() => {
            clickCountCoal = clickCountCoal + 1
            facile.write('#countCoal', clickCountCoal)
        })

        var clickCountIron = 0
facile.hide('#Planet-Iron')
        facile.onClick('#Planet-Iron',() => {
            clickCountIron = clickCountIron + 1
            facile.write('#countIron', clickCountIron)
        })

        var clickCountUranium = 0
facile.hide('#Planet-Uranium')
        facile.onClick('#Planet-Uranium',() => {
           clickCountUranium = clickCountUranium + 1 
           facile.write('#countUranium', clickCountUranium)
        })

        var clickCountObsidian = 0
facile.hide('#Planet-Obsidian')
        facile.onClick('#Planet-Obsidian',() => {
            clickCountObsidian = clickCountObsidian + 1
            facile.write('#countObsidian', clickCountObsidian)
        })

        var clickCountDiamond = 0
facile.hide('#Planet-Diamond')
        facile.onClick('#Planet-Diamond',() => {
            clickCountDiamant = clickCountDiamond + 1
            facile.write('#countDiamond', clickCountDiamond)
        })

    