# node-red-contrib-simple-sendmail

Send mail using [nodemailer](https://www.npmjs.com/package/nodemailer).

## Usage

### Inputs

#### SMTP Server

- msg.transport.host
- msg.transport.port
- msg.transport.auth.user
- msg.transport.auth.pass

#### Mail

- msg.mail.from
- msg.mail.to
- msg.mail.subject
- msg.mail.body

### Outputs

#### nodemailer response

- msg.payload

## Example

```json
[
    {
        "id": "aef0394a.b36eb8",
        "type": "inject",
        "z": "4fd54dd0.9ec404",
        "name": "inject",
        "topic": "",
        "payload": "",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 130,
        "y": 64,
        "wires": [
            [
                "ddcd8818.524bb8"
            ]
        ]
    },
    {
        "id": "ddcd8818.524bb8",
        "type": "template",
        "z": "4fd54dd0.9ec404",
        "name": "set smtp",
        "field": "transport",
        "fieldType": "msg",
        "format": "json",
        "syntax": "mustache",
        "template": "{\n    \"host\": \"xxx.com\",\n    \"port\": 587,\n    \"auth\": {\n        \"user\": \"mailuser\", \n        \"pass\": \"password\"\n    }\n}",
        "output": "json",
        "x": 268,
        "y": 64,
        "wires": [
            [
                "56d98d64.621d34"
            ]
        ]
    },
    {
        "id": "9a8b10cf.f5e0d",
        "type": "simple-sendmail",
        "z": "4fd54dd0.9ec404",
        "name": "simple sendmail",
        "subject": "",
        "body": "",
        "from": "",
        "to": "",
        "host": "",
        "user": "",
        "pass": "",
        "port": 587,
        "x": 608,
        "y": 64,
        "wires": [
            [
                "5463d265.b18dec"
            ]
        ]
    },
    {
        "id": "5463d265.b18dec",
        "type": "debug",
        "z": "4fd54dd0.9ec404",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 790,
        "y": 64,
        "wires": []
    },
    {
        "id": "56d98d64.621d34",
        "type": "template",
        "z": "4fd54dd0.9ec404",
        "name": "set mail",
        "field": "mail",
        "fieldType": "msg",
        "format": "json",
        "syntax": "mustache",
        "template": "{\n    \"from\": \"foo@xxx.com\",\n    \"to\": \"bar@gmail.com\",\n    \"subject\": \"Hello\",\n    \"text\": \"Hello,\\nHow are you?\\nGoodbye.\"\n}",
        "output": "json",
        "x": 428,
        "y": 64,
        "wires": [
            [
                "9a8b10cf.f5e0d"
            ]
        ]
    }
]
```
