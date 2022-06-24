# k8s-react-mongodb-app

Hi,
this repository contains the code for creating a sample MERN-type web application showing the operation of the Kubernetes cluster. Inside the k8s configuration, I used such elements as Ingress, ClusterIP, NodePort, PV, PVC. If you have no idea what I'm talking about, below in the "Links" section you will find the sources with various articles or documentation I read in process of creation.

Configuration contains:

- Client in React (js)
- API-server (runs with Node.js and Express.js)
- Database in MongoDB with cache in Redis
- YAML files to create k8s cluster

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

Configuration was created under Linux OS, so I don't know if it is going to work under Windows OS.

## Quick start

1. Apply all `.yaml` files to k8s
2. Check your minikube IP
3. Add the following line to the bottom of the /etc/hosts file on your computer (you will need administrator access):

  ```bash
  [minikube IP] todo-app-k8s.com
  ```

4. After you make this change, your web browser sends requests for todo-app-k8s.com URLs to Minikube.

## Default URLs

Client web-app:

```text
www.todo-app-k8s.com
```

API server:

```text
www.todo-app-k8s.com/api
```

## Links

- [Helpful article](https://nirajsonawane.github.io/2020/04/25/Deploy-React-Spring-Boot-MongoDB-Fullstack-application-on-Kubernetes/)
- [Ingres and minikube setup](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/)

## My Docker Hub

You will find [here](https://hub.docker.com/u/azalurg) ready to use docker images.

## Configuration details

- All deployments in the cluster has own NodePorts. They are not crucial for app to work and they are for development purposes.

<table>
  <tr>
    <th>Deployment</th>
    <th>PORT</th>
  </tr>
  <tr>
    <th>Client</th>
    <th>30080</th>
  </tr>
  <tr>
    <th>Server</th>
    <th>30500</th>
  </tr>
  <tr>
    <th>MongoDB</th>
    <th>30270</th>
  </tr>
  <tr>
    <th>Redis</th>
    <th>30379</th>
  </tr>
</table>

- Mongo, Redis, and the API server only have one pod in my setup, but the client has 3. That's because I expect the client to have the most traffic to serve. If necessary, you can always change the number of pods with the client.

## Todo

- [X] Fix Redis error
- [X] Finish README
- [ ] Create backend documentation
