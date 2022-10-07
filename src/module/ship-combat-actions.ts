export const ACTIONS = {
  startRound: {
    title: "swnr.sheet.ship.actions.startRound.title",
    cp: 0,
    desc: "",
    dept: "",
  },
  endRound: {
    title: "swnr.sheet.ship.actions.endRound.title",
    cp: 0,
    desc: "",
    dept: "",
  },
  aboveAndBeyond: {
    title: "swnr.sheet.ship.actions.aboveAndBeyond.title",
    cp: 0,
    desc:
      "Push yourself to help the ship or its crew. Pick an attribute and skill check and  explain how you’re using it to help the ship. If the GM agrees, roll it against difficulty 9. On a success, gain your skill level in Command Points plus one. On a failure, take -1 Command Point.",
    dept: "",
    note:
      "Roll attr/skill vs 9. Success manually give +CP = skill level+1. Fail -1 CP.",
  },
  dealCrisis: {
    title: "swnr.sheet.ship.actions.dealCrisis.title",
    cp: 0,
    desc:
      "Explain what you are doing to solve a Crisis and roll the relevant skill check. The difficulty is usually 10, plus or minus 2 de- pending on the situation and the effectiveness of your action. On a success, the Crisis is resolved.  You may also use this action to aid another PC in resolving a Crisis, or to take one scene’s worth of other actions around the ship.",
    dept: "",
    note:
      "Roll attr/skill vs 10 +/- 2. Success crisis resolved or aid PC resolving crisis.",
  },
  doYourDuty: {
    title: "swnr.sheet.ship.actions.doYourDuty.title",
    cp: 1,
    desc:
      "The ship gains 1 Command Point. PCs who head more than one department can act only in one of them; the rest automatically take  this action. If invoked by a PC, they must name  some plausible act the PC is doing to be useful, and can’t do the same act two rounds in a row.",
    dept: "",
    note: "Name plausible way helping. Cannot do same act two rounds in a row.",
  },
  escape: {
    title: "swnr.sheet.ship.actions.escape.title",
    cp: -4,
    desc:
      "Roll an opposed Int/Pilot or Dex/Pilot skill check plus your ship’s Speed against the  fastest  opponent’s  skill  check  plus  their  ship’s   Speed. On a win, all enemy ships gain one point  of Escape. If an enemy ship gets three points, after  three uses of this maneuver, your ship gets away  from that ship and is no longer in combat with it.",
    dept: "swnr.sheet.ship.station.bridge",
    skill: "swnr.skills.revised.pilot.name",
    attr: ["int", "dex"],
    dc: "opposed",
  },
  evasive: {
    title: "swnr.sheet.ship.actions.evasive.title",
    cp: -2,
    desc:
      "Roll Int or Dex/Pilot against  difficulty 9 to add your Pilot skill to the ship’s AC  until its next turn.  Usable once per round at most.",
    dept: "swnr.sheet.ship.station.bridge",
    skill: "swnr.skills.revised.pilot.name",
    attr: ["int", "dex"],
    dc: 9,
    limit: "round",
  },
  pursue: {
    title: "swnr.sheet.ship.actions.pursue.title",
    cp: -3,
    desc:
      "Opposed Int/Pilot or Dex/Pilot  skill check plus Speed against the target ship’s skill  check plus Speed. On a win, you shed one point  of Escape rating the target ship may have on you.",
    dept: "swnr.sheet.ship.station.bridge",
    skill: "swnr.skills.revised.pilot.name",
    attr: ["int", "dex"],
    dc: "opposed",
  },
  intoFire: {
    title: "swnr.sheet.ship.actions.intoFire.title",
    cp: 0,
    desc:
      "Accept a Crew Lost Crisis and gain your Lead skill plus one in Command Points. You may do this at most once per round.",
    note: "Accept Crew Lost Crisis and add lead skill to CP manually",
    dept: "swnr.sheet.ship.station.captain",
    limit: "round",
  },
  keepTogether: {
    title: "swnr.sheet.ship.actions.keepTogether.title",
    cp: 0,
    desc:
      "Nullify a successful enemy hit   and roll a Crisis instead. You can use this action   in Instant response to an enemy hit but you may only use it once per round.",
    note: "Nullify hit as Instant. Roll Crisis",
    dept: "swnr.sheet.ship.station.captain",
    limit: "round",
  },
  supportDept: {
    title: "swnr.sheet.ship.actions.supportDept.title",
    cp: 0,
    desc:
      "Choose a department. One action that department takes will require 2 fewer Command Points. You can do this once per round.",
    note: "One action for chosen dept. takes 2 fewer CP. Once per round.",
    dept: "swnr.sheet.ship.station.captain",
    limit: "round",
  },
  crashSys: {
    title: "swnr.sheet.ship.actions.crashSys.title",
    cp: -2,
    desc:
      " Roll an opposed Int/Program  check against a targeted ship. On a success, it starts its next turn with a Command Point penalty equal to your Program skill.",
    note: "On success, enemy starts next turn with -CP = Program Skill",
    dept: "swnr.sheet.ship.station.comms",
    skill: "swnr.skills.revised.program.name",
    attr: ["int"],
    dc: "opposed",
  },
  defeatECM: {
    title: "swnr.sheet.ship.actions.defeatECM.title",
    cp: -2,
    desc:
      "Roll an opposed Int/Program against a targeted ship. On a success, any attacks this round by your ship against the target get a hit bonus equal to twice your Program skill",
    note:
      "On success, attacks by your ship this round against targe +hit = 2x Program Skill",
    dept: "swnr.sheet.ship.station.comms",
    skill: "swnr.skills.revised.program.name",
    attr: ["int"],
    dc: "opposed",
  },
  sensorGhost: {
    title: "swnr.sheet.ship.actions.sensorGhost.title",
    cp: -2,
    desc:
      "Succeed on a difficulty 9 Int/Pro- gram check to gain your Program as an AC bonus until the next turn. Usable once per round at most.",
    note: "On success, AC bonus = Program Skill until next turn.",
    dept: "swnr.sheet.ship.station.comms",
    skill: "swnr.skills.revised.program.name",
    limit: "round",
    attr: ["int"],
    dc: 9,
  },
  boostEngine: {
    title: "swnr.sheet.ship.actions.boostEngine.title",
    cp: -2,
    desc:
      " Roll Int/Fix versus difficulty 8. On a success, the ship’s Speed is increased by 2 until the start of the ship’s next turn.",
    note: "On success, speed +2 until next turn",
    dept: "swnr.sheet.ship.station.engineering",
    skill: "swnr.skills.revised.fix.name",
    attr: ["int"],
    dc: 8,
  },
  damageControl: {
    title: "swnr.sheet.ship.actions.damageControl.title",
    cp: -3,
    desc:
      " Roll Int/Fix versus difficulty  7. On a success, repair a number of lost hit points equal to your Fix skill times 2 for fighter hulls, 3 for frigates, 4 for cruisers, and 6 for capital-class hulls. Each attempt of this action after the first in a fight increases its difficulty by a cumulative +1.",
    note:
      "On success, repair (2/3/4/6) * Fix Skill (ship class based). +1 difficulty each time in fight",
    dept: "swnr.sheet.ship.station.engineering",
    skill: "swnr.skills.revised.fix.name",
    attr: ["int"],
    dc: 7,
  },
  emergencyRepair: {
    title: "swnr.sheet.ship.actions.emergencyRepair.title",
    cp: -3,
    desc:
      " Roll Int/Fix versus difficulty 8. On a success, a disabled system is repaired or  a damage-degraded drive has its rating increased by 1. Destroyed systems cannot be fixed this way.",
    note:
      "On success, manually repair disabled system or degraded engine +1. Destroyed systems not eligible.",
    dept: "swnr.sheet.ship.station.engineering",
    skill: "swnr.skills.revised.pilot.fix.name",
    attr: ["int"],
    dc: 8,
  },
  fireAll: {
    title: "swnr.sheet.ship.actions.fireAll.title",
    cp: -3,
    desc:
      "Gunners fire all weapons mounted on the ship, designating targets as they wish.",
    note: "Gunners fire all",
    dept: "swnr.sheet.ship.station.gunnery",
  },
  fireOne: {
    title: "swnr.sheet.ship.actions.fireOne.title",
    cp: -2,
    desc: "A gunner fires a single ship’s weapon of their choice.",
    note: "A gunners fires one",
    dept: "swnr.sheet.ship.station.gunnery",
  },
  targetSystem: {
    title: "swnr.sheet.ship.actions.targetSystem.title",
    cp: -1,
    desc:
      "A Fire One Weapon action you  take this round may target a ship’s weapons, en- gine, or fittings the GM decides are vulnerable.  Such targeted attacks take -4 to hit. On a hit, do half damage before applying Armor. If damage  gets through the system is disabled or drive is  degraded by 1 level. Disabled systems hit again  are destroyed. You may take this action more than once to aim additional shots you may fire.",
    note:
      "'Fire One Weapon' can target fitting, weapon, or engine with -4 hit. (Half damage - armor) > 0 to work.",
    dept: "swnr.sheet.ship.station.gunnery",
  },
};
