--------------------------------------
Personal Chat Bot Using AWS
--------------------------------------

Tell's Time, Date, Language Translator, Weather report, Country capital, language spoken in the country, currency of the country, tells Joke, say Goodbye & Greeting user back

Test Link: http://nikhilbot1.s3-website-us-east-1.amazonaws.com/

Demo Link: https://youtu.be/ZtCxPII6ll4

--------------------------------------
AWS Services Used

Amazon Lex
Amazon Translate
AWS Lambda
AWS Dynamo-Db
S3
Amazon IAM
Amazon Cognito 

--------------------------------------

Each folder is the intent in AWS Lex bot service.

the folder contains the Lambda code to create responce to Lex

Intent like Jokes, Greeting, Goodbye displays stored responces in AWS Dynamo-DB, 
The DynamoDB folder contains the table design and the values stored.


S3 bucket is used to host the static website that is Integrated Lex with the help of Amazon Cognito credentials provide.

Amazon IAM is used to create a role for lamda to access the Lex and dynamodb and the role is added to each intent.

