const structure = [
    {
        title: "Introduction",
        videos: [{ title: "Amazon Web Services essentials", id: 2254925 }],
    },
    {
        title: "1. Cloud Concepts",
        videos: [
            { title: "Cloud services", id: 2255320 },
            { title: "Cloud benefits", id: 2254926 },
            { title: "Cloud elasticity", id: 2255321 },
            { title: "Cloud constraints", id: 2257090 },
            { title: "Cloud administration", id: 2255322 },
        ],
    },
    {
        title: "2. Cloud Practices",
        videos: [
            { title: "Design for failure", id: 2254927 },
            { title: "Implement elasticity", id: 2254928 },
            { title: "Decouple your components", id: 2255323 },
            { title: "Optimize for performance", id: 2254929 },
            { title: "Keep things secure", id: 2256106 },
            { title: "Optimize for cost", id: 2257091 },
        ],
    },
    {
        title: "3. Keep Things Secure",
        videos: [
            { title: "The shared security model", id: 2256107 },
            { title: "IAM: Master account", id: 2256108 },
            { title: "Creating a new AWS account", id: 2257092 },
            { title: "IAM: Groups, roles, and permissions", id: 2254930 },
            { title: "Creating a new user", id: 2255324 },
            { title: "Creating a key pair", id: 2257093 },
            { title: "Security groups", id: 2254931 },
            { title: "Creating a security group", id: 2256109 },
            { title: "VPC", id: 2255325 },
        ],
    },
    {
        title: "4. Designing for Failure",
        videos: [
            { title: "Virtual servers (EC2) and Elastic IP", id: 2257094 },
            { title: "Regions and Availability Zones", id: 2254932 },
            { title: "The Amazon Machine Image (AMI)", id: 2254933 },
            { title: "Understanding bootstrapping", id: 2255326 },
            { title: "Elastic Block Storage (EBS)", id: 2256110 },
            { title: "Launching a new EC2 instance", id: 2254934 },
            { title: "Elastic Load Balancing (ELB)", id: 2256111 },
            { title: "Setting up an ELB", id: 2256112 },
            { title: "Connecting to the new server via HTTP", id: 2254935 },
            { title: "Connecting to the instance via SSH", id: 2254936 },
            { title: "Relational Database Service (RDS)", id: 2255327 },
            { title: "Create a MySQL RDS database", id: 2254937 },
        ],
    },
    {
        title: "5. Implement Elasticity/Automate Infrastructure",
        videos: [
            { title: "Creating a custom AMI", id: 2256113 },
            { title: "Autoscaling", id: 2255328 },
            { title: "Cloud monitoring (CloudWatch)", id: 2255329 },
            { title: "Setting up Auto Scaling: Part 1", id: 2257095 },
            { title: "Setting up Auto Scaling: Part 2", id: 2259110 },
            { title: "Testing the Auto Scaling", id: 2254938 },
            { title: "Elastic Beanstalk", id: 2256114 },
            { title: "Use Elastic Beanstalk: Part 1", id: 2256115 },
            { title: "Use Elastic Beanstalk: Part 2", id: 2256116 },
            { title: "OpsWorks", id: 2255330 },
            { title: "CloudFormation and CloudFormer", id: 2256117 },
            { title: "CodeDeploy", id: 2256118 },
        ],
    },
    {
        title: "6. Further Optimize for Performance",
        videos: [
            { title: "Caching: AWS Elasticache", id: 2257096 },
            { title: "Caching: AWS CloudFront", id: 2257097 },
            { title: "Search: AWS CloudSearch", id: 2257098 },
        ],
    },
    {
        title: "7. Going Serverless",
        videos: [
            { title: "S3 and Glacier", id: 2254939 },
            { title: "Use S3 for web application hosting", id: 2256119 },
            { title: "Serverless architectures: API Gateway", id: 2256120 },
            { title: "Serverless architectures: AWS Lambda", id: 2255331 },
            { title: "Lambda and the Gateway API", id: 2254940 },
            { title: "Scalable NoSQL data store (DynamoDB)", id: 2257099 },
            { title: "Creating a DynamoDB table", id: 2257100 },
            { title: "Deploy the API and test the application", id: 2255332 },
        ],
    },
    {
        title: "8. Additional Services for Decoupling Components",
        videos: [
            { title: "Simple Queue Service (SQS)", id: 2256121 },
            { title: "Simple Workflow Service (SWF)", id: 2255333 },
            { title: "Simple Notification Service (SNS)", id: 2256122 },
        ],
    },
    {
        title: "9. Optimize for Cost",
        videos: [
            { title: "Keeping tabs on the tab", id: 2255334 },
            { title: "Matching supply with demand", id: 2256123 },
            { title: "Utilizing cost effective resources", id: 2255335 },
        ],
    },
    { title: "Conclusion", videos: [{ title: "Next steps", id: 2257101 }] },
];

module.exports = structure;
