# Particle Silo

*Find all the resources you need for your next outreach activity!*

[SciCommHack Challenge](https://www.scicommhack.com/challenges)

## Recipes for Contributing (GitHub Users)

1.) Fork the [repository](https://github.com/particlesilo/particlesilo).

```
git clone git@github.com:particlesilo/particlesilo.git
# or replace particlesilo with your username like
git clone git@github.com:usernamehere/particlesilo.git

cd particlesilo
# If particlesilo developer
git remote add upstream git@github.com:manyaagarwal/particlesilo.git
git checkout main
#git pull upstream main
git reset --hard upstream/main

# If using your own fork
git remote add upstream git@github.com:particlesilo/particlesilo.git
git checkout main
git pull upstream main # pull latest from main

# check diff
git diff -U0 --color remotes/upstream/main

# to reset to main
git reset --hard upstream/main

# to push changes to main
git push origin main

```
When ready, submit a Pull Request. :blush:

## Contact Us for Contributions

To contribute Materials, submit a PullRequest to [particleSiloMaterials](https://github.com/particlesilo/particleSiloMaterials), submit an issue, or request access to edit [google doc](https://docs.google.com/document/d/1AovmDnv4CGlxgUzkjo2h-qfyWXPYA-t1lLEsEsLvfmU/edit).

To contribute to the Website, see [main GitHub repo](https://github.com/particlesilo/particlesilo).


## Instructions for Deploying the Website
See instructions in [2] for set up prior to running these commands:

```
yarn add gh-pages
npm run deploy
```

[1] [How to deploy a Create React App Website to GitHub Pages](https://www.youtube.com/watch?v=ctLFWAanxcI)

[2] [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
