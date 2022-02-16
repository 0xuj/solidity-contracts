const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter",function(){
    it("Get Count",async function(){
        const Counter = await ethers.getContractFactory("Counter");
        const counter = await Counter.deploy();
        await counter.deployed();
        await counter.inc();
        expect(await counter.get()).to.equal(1);
    })
})