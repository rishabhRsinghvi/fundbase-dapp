// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FundBase {
    struct Project {
        string name;
        string description;
        string link;
        uint targetAmount;
        uint currentAmount;
        uint equityPercentage;
        address payable creator;
        bool isFunded;
    }

    Project[] public projects;

    event ProjectCreated(uint indexed projectId, string name, address creator);
    event Funded(uint indexed projectId, uint amount, address funder);
    event Withdrawn(uint indexed projectId, uint amount, address creator);

    function createProject(
        string memory name,
        string memory description,
        string memory link,
        uint targetAmount,
        uint equityPercentage
    ) public {
        projects.push(Project({
            name: name,
            description: description,
            link: link,
            targetAmount: targetAmount,
            currentAmount: 0,
            equityPercentage: equityPercentage,
            creator: payable(msg.sender),
            isFunded: false
        }));
        emit ProjectCreated(projects.length - 1, name, msg.sender);
    }

    function fundProject(uint projectId) public payable {
        Project storage project = projects[projectId];
        require(!project.isFunded, "Project already funded");
        require(msg.value > 0, "Funding amount should be greater than zero");

        project.currentAmount += msg.value;
        emit Funded(projectId, msg.value, msg.sender);

        if (project.currentAmount >= project.targetAmount) {
            project.isFunded = true;
        }
    }

    function withdrawFunds(uint projectId) public {
        Project storage project = projects[projectId];
        require(msg.sender == project.creator, "Only project creator can withdraw");
        require(project.isFunded, "Project not fully funded");

        uint amount = project.currentAmount;
        project.currentAmount = 0;
        project.creator.transfer(amount);

        emit Withdrawn(projectId, amount, project.creator);
    }

    function getProjects() public view returns (Project[] memory) {
        return projects;
    }
}
