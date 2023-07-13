---
title: Deploy and Manage Pods
toc_max_heading_level: 6
---

Horizon CD provide deploy and pods management based on Argo CD. You can easily deploy your application instance and check your pods status.

## Build and deploy application instance
You can instantiate a pipeline to build and deploy your application instance. Your source code will be compiled, packaged and made to an artifact image in **Build** task, and the artifact will be released in kubernetes in **Deploy** task.
1. from the application instance page, click **Build and deploy** button
2. select your git reference and check the differences from the last revision
3. click **Submit** button to confirm the build and deploy.

> **Note that** after changing build and deploy configurations, you could run **Build and deploy** to sync the changes.

## Deploy application instance
You can instantiate a pipeline to deploy your application instance based on the last artifact.
1. from the application instance page, click **Deploy** button
2. check the differences from the last revision
3. click **Submit** button to confirm the Deploy.

> **Note that** you just need to **deploy** your application instance to have deploy configurations take effect.

## Restart application instance
When your application instance is unhealthy, you may need to restart it. Horizon will initialize new pods and then delete the old pods.
1. from the application instance page, click **Restart** button
2. confirm the Restart.

## Rollback application instance
If the new changes are not as expected after released, you can quickly rollback to old revision.
1. from the application instance page, click on **More** and select **Rollback**
2. select a pipeline to rollback
3. confirm the rollback.

## Free application instance
You can free the unused application instances to save kubernetes resources. **Free** will destroy all pods and return resources, preserving the application instance configurations. You can only click **Deploy** to start your application instance up again.
1. from the application instance page, click on **More** and select **Free**
2. confirm the free.


## Check pods
From the application instance page, you can check you pods by **Stdout**, **Events** and **Monitor** in the pods table.
* Stdout: Check the stdout log for exception information
* Events: Check the Events for the warning events
* Monitor: view metrics of the application instance

## Login pod terminal
From the application instance page, click **Terminal** button in the pods table to login pod, which is an implementation of the kubernetes API **exec**.

## Delete pods
You can delete one and more unhealthy pods in order to initialize new pods to replace them.
1. from the application instance page, select the pods you want to delete in the pods table.
2. click **Delete** button and confirm the deletion.