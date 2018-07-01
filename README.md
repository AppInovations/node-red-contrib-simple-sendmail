# node-red-contrib-simple-sendmail

Send mail using [nodemailer](https://www.npmjs.com/package/nodemailer).

## Usage

### Inputs

#### SMTP Server

- msg.mail.transport.host
- msg.mail.transport.port
- msg.mail.transport.auth.user
- msg.mail.transport.auth.pass

#### Mail Options

- msg.mail.options.from
- msg.mail.options.to
- msg.mail.options.subject
- msg.mail.options.text

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
        "x": 464,
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
        "x": 646,
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
        "template": "{\n    \"transport\": {\n        \"host\": \"xxxxx.com\",\n        \"port\": 587,\n        \"auth\": {\n            \"user\": \"username\", \n            \"pass\": \"password\"\n        }\n    },\n    \"options\": {\n        \"from\": \"foo@xxxxx.com\",\n        \"to\": \"bar@gmail.com\",\n        \"subject\": \"Hello\",\n        \"text\": \"Hello,\\nHow are you?\\nGoodbye.\"\n    }\n}",
        "output": "json",
        "x": 284,
        "y": 64,
        "wires": [
            [
                "9a8b10cf.f5e0d"
            ]
        ]
    }
]
```
