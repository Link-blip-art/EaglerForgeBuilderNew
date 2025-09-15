Blockly.defineBlocksWithJsonArray([
  {
    "type": "create_mob",
    "message0": "create mob %1 with health %2 damage %3 speed %4",
    "args0": [
      {"type": "field_input", "name": "NAME", "text": "mob_name"},
      {"type": "field_number", "name": "HEALTH", "value": 100, "min": 1},
      {"type": "field_number", "name": "DAMAGE", "value": 10, "min": 0},
      {"type": "field_number", "name": "SPEED", "value": 1, "min": 0}
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 230,
    "tooltip": "Create a custom mob",
    "helpUrl": ""
  }
]);

Blockly.JavaScript['create_mob'] = function(block) {
  var name = block.getFieldValue('NAME');
  var health = block.getFieldValue('HEALTH');
  var damage = block.getFieldValue('DAMAGE');
  var speed = block.getFieldValue('SPEED');
  var code = `createMob("${name}", ${health}, ${damage}, ${speed});\n`;
  return code;
};
