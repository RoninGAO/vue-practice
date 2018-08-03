# vue-practice

> As title.

## Getting Started

>These instructions will get you a copy of the project up and running on your local >machine for development and testing purposes. See deployment for notes on how to >deploy the project on a live system.

1. json-server

   ```#!bin/bash
   // install json-server in global
   $ npm -g json-server

   // launch back-end API
   $ json-server --watch data.json --routes routes.json --port 7788
   ```

   Then you can call the API by Postman , the api URL like below:

   ```#url
   http://localhost:7788/api/v2/contents
   ```

   you will get json response like :

   ```#!json
   [
    {
      "id": 1,
      "content": "demo"
    },
    {
      "id": 2,
      "content": "Sam"
    }
   ]
   ```

## Prerequisites

this practice need to install the software list

1. json-server
2. live server
3. vue
4. vue-router
5. vuex
6. axios
7. TypeScript (Next level)
8. RxJS (Next level)
9. bootstrap (Next level)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/RoninGAO/vue-practice/tags).

## Authors

* **SAM LEE** - *Initial work* - [RoninGAO](https://github.com/RoninGAO)

See also the list of [contributors](https://github.com/RoninGAO/vue-practice/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc