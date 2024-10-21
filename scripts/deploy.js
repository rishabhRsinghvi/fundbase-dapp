async function main() {
    const FundBase = await ethers.getContractFactory("FundBase");
    const fundBase = await FundBase.deploy();
    await fundBase.deployed();
    console.log("FundBase deployed to:", fundBase.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
