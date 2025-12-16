

        var clickCountPierre = 0;

        facile.onClick('#Planet-Pierre',() => {
            clickCountPierre = clickCountPierre + 1
            facile.write('#countPierre', clickCountPierre)
        })
        
        var clickCountBois  = 0;

        facile.onClick('#Planet-Bois',() => {
            clickCountBois = clickCountBois + 1
            facile.write('#countBois', clickCountBois)
        })

        var clickCountEau = 0

        facile.onClick('#Planet-Eau',() => {
            clickCountEau = clickCountEau + 1
            facile.write('#countEau', clickCountEau)
        })

        var clickCountCharbon = 0

        facile.onClick('#Planet-Charbon',() => {
            clickCountCharbon = clickCountCharbon + 1
            facile.write('#countCharbon', clickCountCharbon)
        })

        var clickCountFer = 0

        facile.onClick('#Planet-Fer',() => {
            clickCountFer = clickCountFer + 1
            facile.write('#countFer', clickCountFer)
        })

        var clickCountUranium = 0

        facile.onClick('#Planet-Uranium',() => {
           clickCountUranium = clickCountUranium + 1 
           facile.write('#countUranium', clickCountUranium)
        })

        var clickCountObsidienne = 0

        facile.onClick('#Planet-Obsidienne',() => {
            clickCountObsidienne = clickCountObsidienne + 1
            facile.write('#countObsidienne', clickCountObsidienne)
        })

        var clickCountDiamant = 0

        facile.onClick('#Planet-Diamant',() => {
            clickCountDiamant = clickCountDiamant + 1
            facile.write('#countDiamant', clickCountDiamant)
        })

    