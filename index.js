#!/usr/bin/env node
import {white, cyan, bold, blue} from 'colorette'

// Text + chalk definitions
const work = white(`${blue('Nx DevTools')}, Developer, Advocate`)
const twitter = cyan('https://twitter.com/mhartington')
const github = cyan('https://github.com/mhartington')
const site = cyan('https://mhartington.io')
const npx = white('npx mhartington')

const newline = '\n'
const heading = `${white('  Mike Hartington |')} ${cyan('mhartington')}`
const working = `${white(bold('     Work:'))}  ${work}`
const twittering = `${white(bold('  Twitter:'))}  ${twitter}`
const githubing = `${white(bold('   GitHub:'))}  ${github}`
const webing = `${white(bold('      Web:'))}  ${site}`
const carding = `${white(bold('     Card:'))}  ${npx}`

const output = heading + newline + newline + working  + newline + twittering + newline + githubing + newline + webing  + newline  + newline + carding


console.log(output)
