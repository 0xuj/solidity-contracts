const {expect} = require("chai");
const {ethers} = require("hardhat");j

describe("ArrayShift",() => {
    it("Shifting test",()=>{
        const Shift =  await ethers.getContractFactory("ArrayShift");
        const shift = await Shift.deploy();
        await shift.deployed();
    })
})