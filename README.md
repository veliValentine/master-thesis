# Master Thesis
Master thesis for the university of Helsinki. It can be found at [UNIVERSITY OF HELSINKI OPEN REPOSITORY](http://urn.fi/URN:NBN:fi:hulib-202306132613)

Review can be seen at [/review/grappa_files_29_05_2023.pdf](./review/grappa_files_29_05_2023.pdf).

Thesis recieved final grade of 2 out of 5.

## Abstract
A case study that studied the performance impact of a node.js component when it was refactored from monolith environment into independent service. The performance study studied the response time of the blocking part of JavaScript code in the component. The non blocking part of the code and the added network overhead from the refactoring were excluded from the performance review. Literature review didn’t show any related research that studied the performance impact of a node.js component when it was refactored from monolith into microservices. Many found studies were found that studied the response time and throughput of REST API build with node.js with comparisons to other programming languages. A study were found that related to refactoring an application from monolith into microservices. None of the found studies were directly related to the studied case. It was noted that the response time of the component improved by 46.5% when it was refactored from monolith into microservice. It is possible that when a node.js monolith application grows it starts to affect the throughput of the event loop affecting performance critical components. For the case component it was beneficial to refactor it into independent service in order to gain the 92.6ms in the mean response time.
