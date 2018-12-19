#!/usr/bin/env node
const {white, cyan, green,bold, blue} = require("colorette")

// Text + chalk definitions
var work = white(`${blue('Ionic')}, Developer, Advocate`)
var twitter = cyan('https://twitter.com/mhartington')
var github = cyan('https://github.com/mhartington')
var site = cyan('https://mhartington.io')
var npx = white('npx mhartington')

var newline = '\n'
var heading = `${white('  Mike Hartington /')} ${cyan('mhartington')}`
var working = `${white(bold('     Work:'))}  ${work}`
var twittering = `${white(bold('  Twitter:'))}  ${twitter}`
var githubing = `${white(bold('   GitHub:'))}  ${github}`
var webing = `${white(bold('      Web:'))}  ${site}`
var carding = `${white(bold('     Card:'))}  ${npx}`

let output = heading + newline + newline + working  + newline + twittering + newline + githubing + newline + webing  + newline  + newline + carding


console.log(output)
