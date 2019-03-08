## Docker

###### Docker Concepts

###### Images
* Images are read only templates used to create containers.
* Images are created with the docker build command, either by us or by other docker users.
* Images are composed of layers of other images.
* Images are stored in a Docker registry.

###### Containers
* If an image is a class, then a container is an instance of a class - a runtime object.
* Containers are lightweight and portable encapsulations of an environment in which to run applications.
* Containers are created from images. Inside a container, it has all the binaries and dependencies needed to run the application.

###### Registries and Repositories
* A registry is where we store our images.
* You can host your own registry, or you can use Docker's public registry which is called DockerHub.
* Inside a registry, images are stored in repositories.
* Docker repository is a collection of different docker images with the same name, that have different tags, each tag usually represents a different version of the image.


###### Namespacing

Isolating resources per process (or group of processes)
* Processes
* Hard drive
* Network
* Users
* Hostnames
* Inter Process Communication

###### Control Groups (cgroups)
Limit amount of resources used per process

* Memory
* CPU Usage
* HD I/O
* Network Bandwidth


A container is a process or set of processes that have a grouping of process or essentially the above two together I guess.

###### Creating and Running a Container from an Image
```docker run <image name>```

Essentially, what this does is to run it through the docker client and then do something 

###### Listing Docker 
```docker ps```
```docker ps --all```

There are differences between creating the container and running the container. 
```docker create <image>```
```docker start -a <image-id>```

we can log a container

```docker stop <container id>```, this sends a sigterm message which is terminate signal, and shut down the container. (this is good for cleaning up)
```docker kill <container id>```, this stops everytime anyways.

```docker system prune```: remove all the stopped container

**Multi-Command Containers**
```docker exec -it <container id>```

**Getting a Command Prompt in a Container**
sh is the bash
```docker exec -it <container id> sh```

###### Building Custom Images Through Docker Server

###### Create a Dockerfile
The flow goes downward --> 
* Specify a base image
* Run some commands to install additional programs
* Specify a command to run on container startup

###### Dockerfile Teardown
We have the set of instruction
```FROM``` , ```run```, ```CMD```
Then each of these instructions need a set of argument.

###### What's a Base Image?
We use the base image which gives us some of the data in order to perform something already.

```docker build .``` tells the docker-server to build a container as a specified 
We generate images after the images and that each step look at the previous image. The final image comes from the last steps. 
The ```.``` is the context, and it is important

We can change how long it takes to build an image.

###### Tagging an Image
```docker build -t snony/redis:latest .```

Then you can just run the container: ```docker run snony/redis```
We use images to create images, and we can take a container and create an image. 

Also we need to make sure that the connection is established and make sure that it is clear and still connected. 

###### Docker Compose
This is a separate that gets installed along with Docker
Used to start up multiple Docker containers at the same time. Automates some of the long-winded arguments we were passing to 'docker run'

```docker-compose.yml``` contains all the options we'd normaly pass to docker-cli

```docker-compose up```: run all the container specified in the docker-compose.yml.

docker-compose commands need to be run in the docker 

**What was the purpose with volume?**
A docker volume can be thought of as a port mappping you were setting up before. You are setting up a mapping from inside a container to outside the container.
This is similar to using the port:port , redirect from port to port. 

**What is a phase?**
We can have several phase with docker. 

###### Continuous Integration and Deployment with AWS
