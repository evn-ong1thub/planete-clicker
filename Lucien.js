var clickCountStone = facile.state(0);

facile.onClick('#Planet-Stone', () => {
    clickCountStone.value = clickCountStone.value + 1
})
clickCountStone.onChange((newCount) => {
    facile.write('#countStone', newCount);
});

var clickCountWood = facile.state(0);
facile.hide('#Planet-Wood')
facile.onClick('#Planet-Wood', () => {
    clickCountWood.value = clickCountWood.value + 1
})
clickCountWood.onChange((newCount) => {
    facile.write('#countWood', newCount);
})

var clickCountWater = facile.state(0);
facile.hide('#Planet-Water')
facile.onClick('#Planet-Water', () => {
    clickCountWater.value = clickCountWater.value + 1
})
clickCountWater.onChange((newCount) => {
    facile.write('#countWater', newCount)
})

var clickCountCoal = facile.state(0)
facile.hide('#Planet-Coal')
facile.onClick('#Planet-Coal', () => {
    clickCountCoal.value = clickCountCoal.value + 1
})
clickCountCoal.onChange((newCount) => {
    facile.write('#countCoal', newCount)
})

var clickCountIron = facile.state(0)
facile.hide('#Planet-Iron')
facile.onClick('#Planet-Iron', () => {
    clickCountIron.value = clickCountIron.value + 1
})
clickCountIron.onChange((newCount) => {
    facile.write('#countIron', newCount)
})

var clickCountUranium = facile.state(0)
facile.hide('#Planet-Uranium')
facile.onClick('#Planet-Uranium', () => {
    clickCountUranium.value = clickCountUranium.value + 1
})
clickCountUranium.onChange((newCount) => {
    facile.write('#countUranium', newCount)
})

var clickCountObsidian = facile.state(0)
facile.hide('#Planet-Obsidian')
facile.onClick('#Planet-Obsidian', () => {
    clickCountObsidian.value = clickCountObsidian.value + 1
})
clickCountObsidian.onChange((newCount) => {
    facile.write('#countObsidian', newCount)
})

var clickCountDiamond = facile.state(0)
facile.hide('#Planet-Diamond')
facile.onClick('#Planet-Diamond', () => {
    clickCountDiamant.value = clickCountDiamond.value + 1
})
clickCountDiamond.onChange((newCount) => {
    facile.write('#countDiamond', newCount)
})