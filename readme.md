# README

## Requirements

1. Docker
2. Docker compose (Only in case the desktop version is not installed)
3. Run migrations (See Makefile)
4. Run seeds (See Makefile)

## Directories

### 1. API

```sh
cd ./api
```

### 2. WEB APP

```sh
cd ./files_front
```


## Install dependencies

```sh
npm install
```

## Run tests

```sh
npm test
```

## Check linter

```sh
npm run lint
```

OR

```sh
npm run lint:fix # In case you want to autofix all the linter incidences
```

## CI (Continuous Integration) => Linter + Tests + Coverage

```sh
npm run ci # this command checks linter, run the tests and generate a coverage report
```

## Start the Application

### 1. Using Docker

For this case, the only thing you need to run is the command

```sh
docker-compose up --build
```

If you want to run a command inside the container, use

```sh
docker-compose run --rm api <any_command>
```

### 2. Make

### 2.1 Install make (Windows only)

1. If you have Windows, you must first install chocolatey (https://chocolatey.org/install)

2. Then you must install make using choco

```sh
choco install make

```

### Using make

```sh
make start
```

To see all the commands, please see the `./Makefile` file in the project

## Verify operation

To verify that your application is running, you can open your browser and put this URL

```
http://localhost:3001/ => for check the health of the API
http://localhost:3000/ => for open the WEB APP in your browser
```

But if you want to use all available requests, you must use postman to interact with the application (https://www.postman.com/downloads/)

**Example: using Postman**

Open postman and create a `GET` request
in the URL put `http://localhost:3001/files/data?filename=`

You will notice that you will receive a response format similar to this (Response Application was)

```json
fileData = {
  "file": "string",
  "lines": [
    {
      "text": "string",
      "number": 8,
      "hex": "string"
    }
  ]
}

{
  "data": fileData[],
  "message": "string",
  "status": "number"
}

```

Answer Example

```json
{
  "data": [
    {
      "file": "test2.csv",
      "lines": [
        {
          "text": "FcbfmIXwGMIrnFmEIWPEbMdIMjkQbtZh",
          "number": 6092,
          "hex": "3739ff1cb9bc4774aec4a127dc025dc3"
        }
      ]
    },
    {
      "file": "test3.csv",
      "lines": [
        {
          "text": "KbHqJlsMXYkSuMBOdsIkCjGQs",
          "number": 57342948,
          "hex": "652ebf50f09bb9b4e85ffdb9c63f355b"
        },
        {
          "text": "jcIXpyuGRNS",
          "number": 604,
          "hex": "d1551830564c370a9431424a73141ded"
        },
        {
          "text": "DzqGmDtIGpbBcfaMKD",
          "number": 15,
          "hex": "cfcb229ab6b47f89b04ceff29a7f6b54"
        }
      ]
    },
    {
      "file": "test18.csv",
      "lines": [
        {
          "text": "pz",
          "number": 9812285,
          "hex": "jz12bd71f31fc9f7243d17dfd7c859"
        },
        {
          "text": "B",
          "number": 0,
          "hex": "jz5fb2cd70e3607d15639674e8b86a"
        },
        {
          "text": "JhyCXxBcwxya",
          "number": 13,
          "hex": "jz4c144667fb5c5e671159e63b4475"
        },
        {
          "text": "kcCcCuSsMSStfEfdaAThviu",
          "number": 19997,
          "hex": "jz90aa7154ac15b5b9f88c214dc33f"
        },
        {
          "text": "TpdMkfIuTVCuTMsTpV",
          "number": 3397736,
          "hex": "jz7a5b25f65cfa7addafa77915d363"
        }
      ]
    },
    {
      "file": "test6.csv",
      "lines": [
        {
          "text": "EybTnpxWXgeuH",
          "number": 73709945,
          "hex": "e0716eec73a21b93722efdb90b285a5f"
        },
        {
          "text": "tswB",
          "number": 8,
          "hex": "2c82108126ea55f1c7c887760dc1296b"
        },
        {
          "text": "j",
          "number": 87006902,
          "hex": "c3417309b426d359d4e5b087a682db14"
        },
        {
          "text": "OhYTyBd",
          "number": 10477237,
          "hex": "8237fa752c3f5c64a9962d469da63c7c"
        },
        {
          "text": "BFVJNgkxqGp",
          "number": 745122,
          "hex": "b0338bac10b78958a56a86e6bda62e0c"
        },
        {
          "text": "GpHOYeX",
          "number": 452545536,
          "hex": "b590af3a8669e9c7f4ecbd00e3134f50"
        },
        {
          "text": "JeSRijLyYUVAvhEliABxM",
          "number": 4,
          "hex": "e09877f9f6fe8094097d3f268c00e0c4"
        },
        {
          "text": "RhpWQRfslt",
          "number": 35,
          "hex": "bd29e301fd4b2c78077dfd3ff4d2ee47"
        },
        {
          "text": "rYruuXGEGxMhBbIzo",
          "number": 5,
          "hex": "460cafb49d94b58eb960668d6e4998bd"
        },
        {
          "text": "pPDa",
          "number": 375,
          "hex": "e20781aede8d099b8ff01fcbb6f39921"
        }
      ]
    },
    {
      "file": "test9.csv",
      "lines": [
        {
          "text": "MnTeEodBFjselhgVLBuTtAzx",
          "number": 575,
          "hex": "1cc1804ebdb9fc5874eaeebd044a1e75"
        },
        {
          "text": "nfzRimcKGGhJpkqVOv",
          "number": 351596,
          "hex": "1415d2f68f214e2e9be45a07839c7fff"
        },
        {
          "text": "gkYyKmWqeAUuPVdFMlsTGhtpoD",
          "number": 62223342,
          "hex": "06723afdba737134a979f02df8931953"
        },
        {
          "text": "eKlrDQzFSXnjgHCaQNPgcIS",
          "number": 56593892,
          "hex": "972032c9a6933b79c51a5c016f9e8065"
        },
        {
          "text": "joYXeyaLKWnrvUVNvXxLiTCSayotV",
          "number": 8,
          "hex": "9b9bc2ccf86cefddfe94705ec344173e"
        },
        {
          "text": "Y",
          "number": 4,
          "hex": "bfa8e06d1c71d1b1d702df9975a3d9c4"
        },
        {
          "text": "dQ",
          "number": 830951466,
          "hex": "50e5fda6b37907cb24aeeb11070514b8"
        },
        {
          "text": "kMobYXW",
          "number": 226244,
          "hex": "cfc81680d1e64902970a0a9c7a8c6b54"
        },
        {
          "text": "CMjiJBjG",
          "number": 222,
          "hex": "feacb645f91747497893b384f3bc1140"
        },
        {
          "text": "kylplhSq",
          "number": 13994,
          "hex": "9a6e052d379d61a16e5a22c701ec19a9"
        },
        {
          "text": "qzOzVLxzUiIWnLFCdDzFX",
          "number": 18068,
          "hex": "dd05d3353c7855b9887b255c86b6666a"
        },
        {
          "text": "fTHfbBGSZWHsiSQdJIDcFYP",
          "number": 490586,
          "hex": "5a0ebd49e4159d1ffa939848d4fe7a86"
        }
      ]
    }
  ],
  "message": null,
  "status": 200
}
```
