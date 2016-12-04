from flask import Flask
from auth import get_key
import requests

app = Flask(__name__)

@app.route('/email')
def send_mail():
    payload = {}
    url = 'https://https://api:{}@api.mailgun.net/v3/{}'.format(get_key('mailgun', 'secret'), get_key('mailgun', 'domain'))
    requests.post(url, data=payload)
    print(url)
    return(url)

if __name__ == '__main__':
    app.run()
