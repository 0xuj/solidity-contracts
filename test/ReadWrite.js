const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ReadWrite",function(){
    it("get",async function(){
        const RW = await ethers.getContractFactory("ReadWrite");
        const rw = await RW.deploy();
        await rw.deployed();
        await rw.set(3);
        expect(await rw.get()).to.equal(3);
    })
})