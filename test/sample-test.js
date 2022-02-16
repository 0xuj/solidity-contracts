const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HelloWorld", function () {
  it("HelloWorld", async function () {
    const Hello = await ethers.getContractFactory("HelloWorld");
    const hello = await Hello.deploy();
    await hello.deployed();

    expect(await hello.greet()).to.equal(3);

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
