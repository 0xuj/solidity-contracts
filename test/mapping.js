const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Mapping",()=>{
    it("Checking Mapping",async ()=>{
        const Map = await ethers.getContractFactory("Mapping");
        const map = await Map.deploy();
        await map.deployed();
        await map.set("0x90b484AC14BA809f65F55fa03C750AB00882D80c",3);
        expect (await map.get("0x90b484AC14BA809f65F55fa03C750AB00882D80c")).to.equal(3);
    })
})