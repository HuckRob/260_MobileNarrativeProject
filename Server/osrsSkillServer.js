var http = require('http');
const url = require('url');


const port = 8080;
const hostname = '127.0.0.1';

//list of runescape skill progression data
let attack1to25 = [
  {'level': 1, 'unlocks': 23},
  {'level': 2, 'unlocks': 0},
  {'level': 3, 'unlocks': 0},
  {'level': 4, 'unlocks': 0},
  {'level': 5, 'unlocks': 7},
  {'level': 6, 'unlocks': 0},
  {'level': 7, 'unlocks': 0},
  {'level': 8, 'unlocks': 0},
  {'level': 9, 'unlocks': 0},
  {'level': 10, 'unlocks': 7},
  {'level': 11, 'unlocks': 0},
  {'level': 12, 'unlocks': 0},
  {'level': 13, 'unlocks': 0},
  {'level': 14, 'unlocks': 0},
  {'level': 15, 'unlocks': 1},
  {'level': 16, 'unlocks': 0},
  {'level': 17, 'unlocks': 0},
  {'level': 18, 'unlocks': 0},
  {'level': 19, 'unlocks': 0},
  {'level': 20, 'unlocks': 8},
  {'level': 21, 'unlocks': 0},
  {'level': 22, 'unlocks': 0},
  {'level': 23, 'unlocks': 0},
  {'level': 24, 'unlocks': 0},
  {'level': 25, 'unlocks': 0},
]

let attack26to50 = [
  {'level': 26, 'unlocks': 0},
  {'level': 27, 'unlocks': 0},
  {'level': 28, 'unlocks': 0},
  {'level': 29, 'unlocks': 0},
  {'level': 30, 'unlocks': 13},
  {'level': 31, 'unlocks': 0},
  {'level': 32, 'unlocks': 0},
  {'level': 33, 'unlocks': 0},
  {'level': 34, 'unlocks': 0},
  {'level': 35, 'unlocks': 0},
  {'level': 36, 'unlocks': 0},
  {'level': 37, 'unlocks': 0},
  {'level': 38, 'unlocks': 0},
  {'level': 39, 'unlocks': 0},
  {'level': 40, 'unlocks': 16},
  {'level': 41, 'unlocks': 0},
  {'level': 42, 'unlocks': 0},
  {'level': 43, 'unlocks': 0},
  {'level': 44, 'unlocks': 0},
  {'level': 45, 'unlocks': 0},
  {'level': 46, 'unlocks': 0},
  {'level': 47, 'unlocks': 0},
  {'level': 48, 'unlocks': 0},
  {'level': 49, 'unlocks': 0},
  {'level': 50, 'unlocks': 9},
];
let attack51to75=[
  {'level': 51, 'unlocks': 0},
  {'level': 52, 'unlocks': 0},
  {'level': 53, 'unlocks': 0},
  {'level': 54, 'unlocks': 0},
  {'level': 55, 'unlocks': 0},
  {'level': 56, 'unlocks': 0},
  {'level': 57, 'unlocks': 0},
  {'level': 58, 'unlocks': 0},
  {'level': 59, 'unlocks': 0},
  {'level': 60, 'unlocks': 11},
  {'level': 61, 'unlocks': 0},
  {'level': 62, 'unlocks': 0},
  {'level': 63, 'unlocks': 0},
  {'level': 64, 'unlocks': 0},
  {'level': 65, 'unlocks': 3},
  {'level': 66, 'unlocks': 0},
  {'level': 67, 'unlocks': 0},
  {'level': 68, 'unlocks': 0},
  {'level': 69, 'unlocks': 0},
  {'level': 70, 'unlocks': 13},
  {'level': 71, 'unlocks': 0},
  {'level': 72, 'unlocks': 0},
  {'level': 73, 'unlocks': 0},
  {'level': 74, 'unlocks': 0},
  {'level': 75, 'unlocks': 14},
];

let strength1to25 = [
  {'level': 1, 'unlocks': 2},
  {'level': 2, 'unlocks': 0},
  {'level': 3, 'unlocks': 0},
  {'level': 4, 'unlocks': 0},
  {'level': 5, 'unlocks': 3},
  {'level': 6, 'unlocks': 0},
  {'level': 7, 'unlocks': 0},
  {'level': 8, 'unlocks': 0},
  {'level': 9, 'unlocks': 0},
  {'level': 10, 'unlocks': 2},
  {'level': 11, 'unlocks': 0},
  {'level': 12, 'unlocks': 0},
  {'level': 13, 'unlocks': 0},
  {'level': 14, 'unlocks': 0},
  {'level': 15, 'unlocks': 2},
  {'level': 16, 'unlocks': 0},
  {'level': 17, 'unlocks': 0},
  {'level': 18, 'unlocks': 0},
  {'level': 19, 'unlocks': 0},
  {'level': 20, 'unlocks': 3},
  {'level': 21, 'unlocks': 0},
  {'level': 22, 'unlocks': 0},
  {'level': 23, 'unlocks': 0},
  {'level': 24, 'unlocks': 0},
  {'level': 25, 'unlocks': 0},
];

let strength26to50 =[
  {'level': '26', 'unlocks': 0},
  {'level': '27', 'unlocks': 0},
  {'level': '28', 'unlocks': 0},
  {'level': '29', 'unlocks': 0},
  {'level': '30', 'unlocks': 2},
  {'level': '31', 'unlocks': 0},
  {'level': '32', 'unlocks': 0},
  {'level': '33', 'unlocks': 0},
  {'level': '34', 'unlocks': 0},
  {'level': '35', 'unlocks': 1},
  {'level': '36', 'unlocks': 0},
  {'level': '37', 'unlocks': 0},
  {'level': '38', 'unlocks': 0},
  {'level': '39', 'unlocks': 0},
  {'level': '40', 'unlocks': 2},
  {'level': '41', 'unlocks': 0},
  {'level': '42', 'unlocks': 1},
  {'level': '43', 'unlocks': 0},
  {'level': '44', 'unlocks': 0},
  {'level': '45', 'unlocks': 0},
  {'level': '46', 'unlocks': 0},
  {'level': '47', 'unlocks': 0},
  {'level': '48', 'unlocks': 0},
  {'level': '49', 'unlocks': 0},
  {'level': '50', 'unlocks': 2},
];

let strength51to75 = [
  {'level': '51', 'unlocks': 0},
  {'level': '52', 'unlocks': 0},
  {'level': '53', 'unlocks': 0},
  {'level': '54', 'unlocks': 0},
  {'level': '55', 'unlocks': 0},
  {'level': '56', 'unlocks': 0},
  {'level': '57', 'unlocks': 0},
  {'level': '58', 'unlocks': 0},
  {'level': '59', 'unlocks': 0},
  {'level': '60', 'unlocks': 2},
  {'level': '61', 'unlocks': 0},
  {'level': '62', 'unlocks': 0},
  {'level': '63', 'unlocks': 0},
  {'level': '64', 'unlocks': 0},
  {'level': '65', 'unlocks': 3},
  {'level': '66', 'unlocks': 0},
  {'level': '67', 'unlocks': 0},
  {'level': '68', 'unlocks': 0},
  {'level': '69', 'unlocks': 0},
  {'level': '70', 'unlocks': 4},
  {'level': '71', 'unlocks': 0},
  {'level': '72', 'unlocks': 0},
  {'level': '73', 'unlocks': 0},
  {'level': '74', 'unlocks': 0},
  {'level': '75', 'unlocks': 3},
];
let defence1to25 = [
  {'level': '1', 'unlocks': 6},
  {'level': '2', 'unlocks': 0},
  {'level': '3', 'unlocks': 0},
  {'level': '4', 'unlocks': 0},
  {'level': '5', 'unlocks': 3},
  {'level': '6', 'unlocks': 0},
  {'level': '7', 'unlocks': 0},
  {'level': '8', 'unlocks': 0},
  {'level': '9', 'unlocks': 0},
  {'level': '10', 'unlocks': 10},
  {'level': '11', 'unlocks': 0},
  {'level': '12', 'unlocks': 0},
  {'level': '13', 'unlocks': 0},
  {'level': '14', 'unlocks': 0},
  {'level': '15', 'unlocks': 0},
  {'level': '16', 'unlocks': 0},
  {'level': '17', 'unlocks': 0},
  {'level': '18', 'unlocks': 0},
  {'level': '19', 'unlocks': 0},
  {'level': '20', 'unlocks': 8},
  {'level': '21', 'unlocks': 0},
  {'level': '22', 'unlocks': 0},
  {'level': '23', 'unlocks': 0},
  {'level': '24', 'unlocks': 0},
  {'level': '25', 'unlocks': 3},
];

let defence26to50 =[
  {'level': '26', 'unlocks': 0},
  {'level': '27', 'unlocks': 0},
  {'level': '28', 'unlocks': 0},
  {'level': '29', 'unlocks': 0},
  {'level': '30', 'unlocks': 11},
  {'level': '31', 'unlocks': 0},
  {'level': '32', 'unlocks': 0},
  {'level': '33', 'unlocks': 0},
  {'level': '34', 'unlocks': 0},
  {'level': '35', 'unlocks': 1},
  {'level': '36', 'unlocks': 0},
  {'level': '37', 'unlocks': 0},
  {'level': '38', 'unlocks': 0},
  {'level': '39', 'unlocks': 0},
  {'level': '40', 'unlocks': 26},
  {'level': '41', 'unlocks': 0},
  {'level': '42', 'unlocks': 1},
  {'level': '43', 'unlocks': 0},
  {'level': '44', 'unlocks': 0},
  {'level': '45', 'unlocks': 0},
  {'level': '46', 'unlocks': 0},
  {'level': '47', 'unlocks': 0},
  {'level': '48', 'unlocks': 0},
  {'level': '49', 'unlocks': 0},
  {'level': '50', 'unlocks': 3},
];

let defence51to75 = [
  {'level': '51', 'unlocks': 0},
  {'level': '52', 'unlocks': 0},
  {'level': '53', 'unlocks': 0},
  {'level': '54', 'unlocks': 0},
  {'level': '55', 'unlocks': 1},
  {'level': '56', 'unlocks': 0},
  {'level': '57', 'unlocks': 0},
  {'level': '58', 'unlocks': 0},
  {'level': '59', 'unlocks': 0},
  {'level': '60', 'unlocks': 6},
  {'level': '61', 'unlocks': 0},
  {'level': '62', 'unlocks': 0},
  {'level': '63', 'unlocks': 0},
  {'level': '64', 'unlocks': 0},
  {'level': '65', 'unlocks': 4},
  {'level': '66', 'unlocks': 0},
  {'level': '67', 'unlocks': 0},
  {'level': '68', 'unlocks': 0},
  {'level': '69', 'unlocks': 0},
  {'level': '70', 'unlocks': 11},
  {'level': '71', 'unlocks': 0},
  {'level': '72', 'unlocks': 0},
  {'level': '73', 'unlocks': 0},
  {'level': '74', 'unlocks': 0},
  {'level': '75', 'unlocks': 14},
];
let defence76to80=[
  {'level': '76', 'unlocks': 0},
  {'level': '77', 'unlocks': 0},
  {'level': '78', 'unlocks': 0},
  {'level': '79', 'unlocks': 0},
  {'level': '80', 'unlocks': 1},
];

let ranged1to25 = [
  {'level': '1', 'unlocks': 9},
  {'level': '2', 'unlocks': 0},
  {'level': '3', 'unlocks': 0},
  {'level': '4', 'unlocks': 0},
  {'level': '5', 'unlocks': 5},
  {'level': '6', 'unlocks': 0},
  {'level': '7', 'unlocks': 0},
  {'level': '8', 'unlocks': 0},
  {'level': '9', 'unlocks': 0},
  {'level': '10', 'unlocks': 2},
  {'level': '11', 'unlocks': 0},
  {'level': '12', 'unlocks': 0},
  {'level': '13', 'unlocks': 0},
  {'level': '14', 'unlocks': 0},
  {'level': '15', 'unlocks': 0},
  {'level': '16', 'unlocks': 1},
  {'level': '17', 'unlocks': 0},
  {'level': '18', 'unlocks': 0},
  {'level': '19', 'unlocks': 0},
  {'level': '20', 'unlocks': 10},
  {'level': '21', 'unlocks': 0},
  {'level': '22', 'unlocks': 0},
  {'level': '23', 'unlocks': 0},
  {'level': '24', 'unlocks': 0},
  {'level': '25', 'unlocks': 1},
];

let ranged26to50 = [
  {'level': '26', 'unlocks': 1},
  {'level': '27', 'unlocks': 0},
  {'level': '28', 'unlocks': 1},
  {'level': '29', 'unlocks': 0},
  {'level': '30', 'unlocks': 11},
  {'level': '31', 'unlocks': 1},
  {'level': '32', 'unlocks': 0},
  {'level': '33', 'unlocks': 0},
  {'level': '34', 'unlocks': 0},
  {'level': '35', 'unlocks': 0},
  {'level': '36', 'unlocks': 1},
  {'level': '37', 'unlocks': 0},
  {'level': '38', 'unlocks': 0},
  {'level': '39', 'unlocks': 0},
  {'level': '40', 'unlocks': 14},
  {'level': '41', 'unlocks': 0},
  {'level': '42', 'unlocks': 1},
  {'level': '43', 'unlocks': 0},
  {'level': '44', 'unlocks': 0},
  {'level': '45', 'unlocks': 1},
  {'level': '46', 'unlocks': 1},
  {'level': '47', 'unlocks': 0},
  {'level': '48', 'unlocks': 0},
  {'level': '49', 'unlocks': 0},
  {'level': '50', 'unlocks': 10},
];

let ranged51to76 = [
  {'level': '51', 'unlocks': 0},
  {'level': '52', 'unlocks': 0},
  {'level': '53', 'unlocks': 0},
  {'level': '54', 'unlocks': 0},
  {'level': '55', 'unlocks': 1},
  {'level': '56', 'unlocks': 0},
  {'level': '57', 'unlocks': 0},
  {'level': '58', 'unlocks': 0},
  {'level': '59', 'unlocks': 0},
  {'level': '60', 'unlocks': 9},
  {'level': '61', 'unlocks': 3},
  {'level': '62', 'unlocks': 0},
  {'level': '63', 'unlocks': 0},
  {'level': '64', 'unlocks': 1},
  {'level': '65', 'unlocks': 6},
  {'level': '66', 'unlocks': 0},
  {'level': '67', 'unlocks': 0},
  {'level': '68', 'unlocks': 0},
  {'level': '69', 'unlocks': 0},
  {'level': '70', 'unlocks': 12},
  {'level': '71', 'unlocks': 0},
  {'level': '72', 'unlocks': 0},
  {'level': '73', 'unlocks': 0},
  {'level': '74', 'unlocks': 0},
  {'level': '75', 'unlocks': 14},
  {'level': '76', 'unlocks': 6},
];

let prayer1to25 = [
  {'level': '1', 'unlocks': 1},
  {'level': '2', 'unlocks': 0},
  {'level': '3', 'unlocks': 0},
  {'level': '4', 'unlocks': 1},
  {'level': '5', 'unlocks': 0},
  {'level': '6', 'unlocks': 0},
  {'level': '7', 'unlocks': 1},
  {'level': '8', 'unlocks': 1},
  {'level': '9', 'unlocks': 1},
  {'level': '10', 'unlocks': 2},
  {'level': '11', 'unlocks': 0},
  {'level': '12', 'unlocks': 0},
  {'level': '13', 'unlocks': 1},
  {'level': '14', 'unlocks': 0},
  {'level': '15', 'unlocks': 0},
  {'level': '16', 'unlocks': 1},
  {'level': '17', 'unlocks': 0},
  {'level': '18', 'unlocks': 0},
  {'level': '19', 'unlocks': 1},
  {'level': '20', 'unlocks': 3},
  {'level': '21', 'unlocks': 0},
  {'level': '22', 'unlocks': 2},
  {'level': '23', 'unlocks': 0},
  {'level': '24', 'unlocks': 0},
  {'level': '25', 'unlocks': 2},
];

let prayer26to50 = [
  {'level': '26', 'unlocks': 1},
  {'level': '27', 'unlocks': 1},
  {'level': '28', 'unlocks': 1},
  {'level': '29', 'unlocks': 0},
  {'level': '30', 'unlocks': 0},
  {'level': '31', 'unlocks': 3},
  {'level': '32', 'unlocks': 0},
  {'level': '33', 'unlocks': 0},
  {'level': '34', 'unlocks': 1},
  {'level': '35', 'unlocks': 0},
  {'level': '36', 'unlocks': 0},
  {'level': '37', 'unlocks': 1},
  {'level': '38', 'unlocks': 0},
  {'level': '39', 'unlocks': 0},
  {'level': '40', 'unlocks': 4},
  {'level': '41', 'unlocks': 0},
  {'level': '42', 'unlocks': 0},
  {'level': '43', 'unlocks': 1},
  {'level': '44', 'unlocks': 1},
  {'level': '45', 'unlocks': 1},
  {'level': '46', 'unlocks': 1},
  {'level': '47', 'unlocks': 0},
  {'level': '48', 'unlocks': 0},
  {'level': '49', 'unlocks': 1},
  {'level': '50', 'unlocks': 3},
];

let prayer51to75 = [
  {'level': '51', 'unlocks': 0},
  {'level': '52', 'unlocks': 1},
  {'level': '53', 'unlocks': 0},
  {'level': '54', 'unlocks': 0},
  {'level': '55', 'unlocks': 2},
  {'level': '56', 'unlocks': 0},
  {'level': '57', 'unlocks': 0},
  {'level': '58', 'unlocks': 0},
  {'level': '59', 'unlocks': 0},
  {'level': '60', 'unlocks': 5},
  {'level': '61', 'unlocks': 1},
  {'level': '62', 'unlocks': 0},
  {'level': '63', 'unlocks': 0},
  {'level': '64', 'unlocks': 0},
  {'level': '65', 'unlocks': 1},
  {'level': '66', 'unlocks': 0},
  {'level': '67', 'unlocks': 0},
  {'level': '68', 'unlocks': 0},
  {'level': '69', 'unlocks': 0},
  {'level': '70', 'unlocks': 6},
  {'level': '71', 'unlocks': 0},
  {'level': '72', 'unlocks': 0},
  {'level': '73', 'unlocks': 0},
  {'level': '74', 'unlocks': 1},
  {'level': '75', 'unlocks': 1},
  {'level': '76', 'unlocks': 0},
];

let prayer76to90 = [
  {'level': '77', 'unlocks': 1},
  {'level': '78', 'unlocks': 0},
  {'level': '79', 'unlocks': 0},
  {'level': '80', 'unlocks': 0},
  {'level': '81', 'unlocks': 0},
  {'level': '82', 'unlocks': 0},
  {'level': '83', 'unlocks': 0},
  {'level': '84', 'unlocks': 0},
  {'level': '85', 'unlocks': 1},
  {'level': '86', 'unlocks': 0},
  {'level': '87', 'unlocks': 0},
  {'level': '88', 'unlocks': 0},
  {'level': '89', 'unlocks': 0},
  {'level': '90', 'unlocks': 1},
];



let magic1to25 = [
  {'level': '1', 'unlocks': 5},
  {'level': '2', 'unlocks': 0},
  {'level': '3', 'unlocks': 1},
  {'level': '4', 'unlocks': 1},
  {'level': '5', 'unlocks': 1},
  {'level': '6', 'unlocks': 1},
  {'level': '7', 'unlocks': 2},
  {'level': '8', 'unlocks': 0},
  {'level': '9', 'unlocks': 1},
  {'level': '10', 'unlocks': 0},
  {'level': '11', 'unlocks': 1},
  {'level': '12', 'unlocks': 0},
  {'level': '13', 'unlocks': 1},
  {'level': '14', 'unlocks': 1},
  {'level': '15', 'unlocks': 1},
  {'level': '16', 'unlocks': 1},
  {'level': '17', 'unlocks': 2},
  {'level': '18', 'unlocks': 0},
  {'level': '19', 'unlocks': 1},
  {'level': '20', 'unlocks': 2},
  {'level': '21', 'unlocks': 1},
  {'level': '22', 'unlocks': 0},
  {'level': '23', 'unlocks': 2},
  {'level': '24', 'unlocks': 1},
  {'level': '25', 'unlocks': 1},
];

let magic26to50 =[
  {'level': '26', 'unlocks': 0},
  {'level': '27', 'unlocks': 2},
  {'level': '28', 'unlocks': 1},
  {'level': '29', 'unlocks': 2},
  {'level': '30', 'unlocks': 3},
  {'level': '31', 'unlocks': 1},
  {'level': '32', 'unlocks': 0},
  {'level': '33', 'unlocks': 1},
  {'level': '34', 'unlocks': 1},
  {'level': '35', 'unlocks': 2},
  {'level': '36', 'unlocks': 0},
  {'level': '37', 'unlocks': 1},
  {'level': '38', 'unlocks': 3},
  {'level': '39', 'unlocks': 1},
  {'level': '40', 'unlocks': 7},
  {'level': '41', 'unlocks': 2},
  {'level': '42', 'unlocks': 1},
  {'level': '43', 'unlocks': 1},
  {'level': '44', 'unlocks': 1},
  {'level': '45', 'unlocks': 2},
  {'level': '46', 'unlocks': 0},
  {'level': '47', 'unlocks': 2},
  {'level': '48', 'unlocks': 1},
  {'level': '49', 'unlocks': 2},
  {'level': '50', 'unlocks': 13},
];

let magic51to75=[
  {'level': '51', 'unlocks': 1},
  {'level': '52', 'unlocks': 1},
  {'level': '53', 'unlocks': 1},
  {'level': '54', 'unlocks': 1},
  {'level': '55', 'unlocks': 2},
  {'level': '56', 'unlocks': 3},
  {'level': '57', 'unlocks': 5},
  {'level': '58', 'unlocks': 2},
  {'level': '59', 'unlocks': 2},
  {'level': '60', 'unlocks': 14},
  {'level': '61', 'unlocks': 2},
  {'level': '62', 'unlocks': 3},
  {'level': '63', 'unlocks': 1},
  {'level': '64', 'unlocks': 3},
  {'level': '65', 'unlocks': 9},
  {'level': '66', 'unlocks': 8},
  {'level': '67', 'unlocks': 1},
  {'level': '68', 'unlocks': 5},
  {'level': '69', 'unlocks': 2},
  {'level': '70', 'unlocks': 11},
  {'level': '71', 'unlocks': 4},
  {'level': '72', 'unlocks': 3},
  {'level': '73', 'unlocks': 3},
  {'level': '74', 'unlocks': 3},
  {'level': '75', 'unlocks': 19},
  
];

let magic76to96=[
  {'level': '76', 'unlocks': 6},
  {'level': '77', 'unlocks': 1},
  {'level': '78', 'unlocks': 4},
  {'level': '79', 'unlocks': 4},
  {'level': '80', 'unlocks': 5},
  {'level': '81', 'unlocks': 6},
  {'level': '82', 'unlocks': 4},
  {'level': '83', 'unlocks': 2},
  {'level': '84', 'unlocks': 3},
  {'level': '85', 'unlocks': 5},
  {'level': '86', 'unlocks': 6},
  {'level': '87', 'unlocks': 3},
  {'level': '88', 'unlocks': 2},
  {'level': '89', 'unlocks': 2},
  {'level': '90', 'unlocks': 6},
  {'level': '91', 'unlocks': 1},
  {'level': '92', 'unlocks': 3},
  {'level': '93', 'unlocks': 2},
  {'level': '94', 'unlocks': 2},
  {'level': '95', 'unlocks': 2},
  {'level': '96', 'unlocks': 2},
];





const server = http.createServer((req, res) => {
    //GET parameters (e.g. www.google.com?search=how-to-programming&)
    const getParameters = url.parse(req.url, true).query;
    let att1to25 = attack1to25;
    let att26to50 = attack26to50;
    let att51to75 = attack51to75;
    let str1to25 = strength1to25;
    let str26to50 = strength26to50;
    let str51to75 = strength51to75;
    let def1to25 = defence1to25;
    let def26to50 = defence26to50;
    let def51to75 = defence51to75;
    let def76to80 = defence76to80;
    let range1to25 = ranged1to25;
    let range26to50 = ranged26to50;
    let range51to76 = ranged51to76;
    let pray1to25 = prayer1to25;
    let pray26to50 = prayer26to50;
    let pray51to75 = prayer51to75;
    let pray76to90 = prayer76to90;
    let mage1to25 = magic1to25;
    let mage26to50 = magic26to50;
    let mage51to75 = magic51to75;
    let mage76to96 = magic76to96;

    let arrayOfSkills = [
      attack1to25,attack26to50,attack51to75,
      strength1to25,strength26to50,strength51to75,
      defence1to25,defence26to50,defence51to75,defence76to80,
      ranged1to25,ranged26to50,ranged51to76,
      prayer1to25,prayer26to50,prayer51to75,prayer76to90,
      magic1to25,magic26to50,magic51to75,magic76to96];

    let requestedArray=[];


  if (typeof getParameters.listNumber !== undefined && parseInt(getParameters.listNumber) !== -1 && !isNaN(parseInt(getParameters.listNumber))) {
      let ID = parseInt(getParameters.listNumber);
      console.log(ID);
      console.log(arrayOfSkills[ID]);
      requestedArray = arrayOfSkills[ID];
  }



res.writeHead(
    200, {
    'Content-Type': 'text/json',
    'Access-Control-Allow-Origin': '*'
  }).end(
    JSON.stringify({
      'result': 200,
      'classes' : requestedArray
  }));

});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});