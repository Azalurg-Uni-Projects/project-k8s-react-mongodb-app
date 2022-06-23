# k8s-react-mongodb-app

Hi,
this repository contains the code for creating a sample MERN-type web application showing the operation of the Kubernetes cluster. Inside the k8s configuration, I used such elements as Ingress, ClusterIP, NodePort, PV, PVC. If you have no idea what I'm talking about, below in the "Links" section you will find the sources with various articles or documentation I read in process of creation.

Configuration contains:
- Client in React (js)
- API-server (runs with Node.js and Express.js)
- Database in MongoDB with cache in Redis
- Cofigurations filse to create k8s cluster

## Flow

1. The user views the React web app with a browser.
2. The React front end communicates with the Express back end via RESTful APIs.
3. The back-end Express application uses the Mongo database for storing and retrieving data.
4. Back-end results are communicated back to the front end.
5. Front-end results are rendered in a human-readable format to the user.

## Requirements

- Docker 
- Kubernetes
- Mnikube

## Quick strat

// todo

## Defult URLs

//todo

## Links

- [Helpfull article](https://l.facebook.com/l.php?u=https%3A%2F%2Fgithub.com%2Freact-static%2Freact-static%2Fdiscussions%2F1465%3Ffbclid%3DIwAR2gbS7yDgDT8G92iIXwA_BenD9wYDPq3k4b_6teIAy3Bnty3IBbB2GDdg4&h=AT0I0KHHzEbTPp-gCeikGkzl09qVRsZyPntJbpAtNdR7ws3PB0ARQ_Z7ZwA3hs43I-PUu0U6ns30jDGpC2YavukwYwbbq1Lz2RsBEcSa9YZeMwfQC9lkjEfZEmT3bQ) 
- [Ingres and minikube setup](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/)

## My Docker Hub

You will find [here](https://hub.docker.com/u/azalurg) ready to use docker images.

## Todo

-[ ] Fix Redis error
-[ ] Finish README
-[ ] Create backend dockumentation
