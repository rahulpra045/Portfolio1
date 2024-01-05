
// SPDX-License-Identifier: MIT

pragma solidity  >=0.7.0 <0.9.0;

contract Portfolio{
    
    struct Project{
        uint id;
        string name;
        string description;
        string image;
        string githubLink;
    }

    struct Education{
        uint id;
        string date;
        string degree;
        string knowledgeAcquired;
        string institutionName;
    }

    //Experience
    struct Experience{
        uint id;
        string date;
        string post;
        string knowledgeAcquired;
        string companyName;
    }
    Project[3] public projects;
    Education[3] public educationDetails;
    Experience[3] public experienceDetails;

    string public imageLink = "QmTydxwU3mFXopVdMEfYqdudkSHHxD2BZpsVJ7apUQcV9s";
    string public description = "I'm Rahul Prasad, a passionate Blockchain Technology enthusiast currently pursuing my bachelor's degree at IIIT Bhopal. My journey into tech began with web development, and I've since broadened my skillset to encompass Data Structures & Algorithms (DSA), Solidity, Ethereum, C++, and Python. Driven by the transformative potential of Blockchain, I'm eager to collaborate on groundbreaking projects in this space. If you share my passion for building the future through decentralization, let's connect!";
    string public resumeLink = "QmTB6szMhQm8PqosCT16JRbUv5CJ8FUGdfh5UGkDYkyxbd";
    uint projectCount;
    uint educationCount;
    uint experienceCount;
    address public manager;

    constructor(){
        manager = msg.sender;
    } 

    modifier onlyManager(){
        require(manager == msg.sender,"You are not the manager;");
        _;
    }

    //Project
    function insertProject(string calldata _name, string calldata _description,string calldata _image, string calldata _githubLink) external{
        require(projectCount<3,"Only 3 projects allowed");
        projects[projectCount] = Project(projectCount,_name,_description,_image,_githubLink);
        projectCount++;
    }

    function changeProject(string calldata _name, string calldata _description,string calldata _image, string calldata _githubLink,uint _projectCount) external{
        require(_projectCount>=0 && _projectCount<3,"Only 3 projects allowed");
        projects[projectCount] = Project(projectCount,_name,_description,_image,_githubLink);
       
    }
    function allProjects() external view returns(Project[3] memory){
        return projects;
    }

    //Education
    function insertEducation(string calldata _date, string calldata _degree,string calldata _knowledgeAcquired, string calldata _institutionName) external onlyManager{
        require(educationCount<3,"Only 3 educations allowed");
        educationDetails[educationCount] = Education(educationCount,_date,_degree,_knowledgeAcquired,_institutionName);
        educationCount++;
    }

    function changeEducation(string calldata _date, string calldata _degree,string calldata _knowledgeAcquired, string calldata _institutionName,uint _educationDetailCount) external onlyManager{
        require(_educationDetailCount>=0 && _educationDetailCount<3,"Invalid educationCount");
        educationDetails[_educationDetailCount] = Education(_educationDetailCount,_date,_degree,_knowledgeAcquired,_institutionName);
    }
    function allEducationDetails() external view returns(Education[3] memory){
        return educationDetails;
    }

    //Experience

    function insertExperience(string calldata _date, string calldata _post,string calldata _knowledgeAcquired, string calldata _companyName) external onlyManager{
        require(experienceCount<3,"Only 3 experience details are allowed");
        experienceDetails[experienceCount] = Experience(experienceCount,_date,_post,_knowledgeAcquired,_companyName);
        experienceCount++;
    }

    function changeExperience(string calldata _date, string calldata _post,string calldata _knowledgeAcquired, string calldata _companyName,uint _experienceDetailCount) external onlyManager{
        require(_experienceDetailCount>=0 && _experienceDetailCount<3,"Invalid experienceCount");
        experienceDetails[experienceCount] = Experience(_experienceDetailCount,_date,_post,_knowledgeAcquired,_companyName);
    }

    function allExperiencedetails() external view returns(Experience[3] memory){
        return experienceDetails;
    }
    function changeDescription(string calldata _description) external{
        description = _description;
    }
    function changeResumeLink(string calldata _resumeLink) external onlyManager{
        resumeLink = _resumeLink;
    }
    function changeImageLink(string calldata _imageLink) external onlyManager{
        imageLink = _imageLink;
    }

    function donate() public payable {
        payable(manager).transfer(msg.value);
    }

}