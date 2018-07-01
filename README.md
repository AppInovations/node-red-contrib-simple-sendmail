# node-red-contrib-simple-sendmail

Send mail using [nodemailer](https://www.npmjs.com/package/nodemailer).

## Usage
### Inputs
#### SMTP Server
- msg.sendmail.host
- msg.sendmail.user
- msg.sendmail.pass
- msg.sendmail.port
#### Mail
- msg.sendmail.from
- msg.sendmail.to
- msg.sendmail.subject
- msg.sendmail.body
### Outputs
#### nodemailer response
- msg.payload

## Example

```json
[
    {
        "id": "4fd54dd0.9ec404",
        "type": "tab",
        "label": "フロー 1"
    },
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
        "name": "set smtp and mail",
        "field": "sendmail",
        "fieldType": "msg",
        "format": "json",
        "syntax": "mustache",
        "template": "{\n    \"host\": \"xyz.com\",\n    \"user\": \"foobar\",\n    \"pass\": \"password\",\n    \"port\": 587,\n    \"from\": \"foo@xyz.com\",\n    \"to\": \"toyou@gmail.com\",\n    \"subject\": \"Hello\",\n    \"body\": \"Hello,\\nHow are you?\\nGoodbye.\"\n}",
        "output": "json",
        "x": 314,
        "y": 64,
        "wires": [
            [
                "9a8b10cf.f5e0d"
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
        "x": 528,
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
        "x": 726,
        "y": 64,
        "wires": []
    }
]
```


