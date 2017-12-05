export const SET_FORMATION = "SET_FORMATION";
export const setFormation = (formationObj) => ({
    type: SET_FORMATION,
    formation: formationObj.formation,
    image: formationObj.image,
    strength: formationObj.strength,
    weakness: formationObj.weakness,
    defInstructions: formationObj.playerInstructions.def,
    midInstructions: formationObj.playerInstructions.mid,
    fwdInstructions: formationObj.playerInstructions.fwd,
    defTacticsPress: formationObj.tactics.defence.pressure,
    defTacticsAggr: formationObj.tactics.defence.aggression,
    defTacticsWidth: formationObj.tactics.defence.teamWidth,
    defTacticsLine: formationObj.tactics.defence.defenderLine,
    ccTacticsPass: formationObj.tactics.chanceCreation.passing,
    ccTacticsShoot: formationObj.tactics.chanceCreation.shooting,
    ccTacticsCross: formationObj.tactics.chanceCreation.crossing,
    ccTacticsPos: formationObj.tactics.chanceCreation.positioning,
    buildUpTacticsSpd: formationObj.tactics.buildUp.speed,
    buildUpTacticsPass: formationObj.tactics.buildUp.passing,
    buildUpTacticsPos: formationObj.tactics.buildUp.positioning
});
