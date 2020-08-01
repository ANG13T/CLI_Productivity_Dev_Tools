const inquirer = require('inquirer');
const clc = require('cli-color');

//HELPER METHODS

var checklistComand = [
    {
      type: 'input',
      name: 'command',
      message: 'Enter Quick Links Command 📟 :'
    }
  ];



class QuickLinks {
    links = [];
};

  module.exports = QuickLinks;